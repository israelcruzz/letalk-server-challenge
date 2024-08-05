import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min, IsEnum, IsArray, ValidateNested, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

enum UFs {
  SP = 'SP',
  MG = 'MG',
  RJ = 'RJ',
  ES = 'ES',
}

enum LoanState {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  CANCELED = 'CANCELED',
}

class SimulateDto {
  @ApiProperty({
    example: 1000,
    description: 'Saldo devedor na simulação.',
  })
  @IsNumber()
  debitBalance: number;

  @ApiProperty({
    example: 50,
    description: 'Taxas associadas ao empréstimo.',
  })
  @IsNumber()
  fees: number;

  @ApiProperty({
    example: 1050,
    description: 'Saldo devedor ajustado na simulação.',
  })
  @IsNumber()
  adjustedDebitBalance: number;

  @ApiProperty({
    example: 100,
    description: 'Valor da parcela do empréstimo.',
  })
  @IsNumber()
  installmentValue: number;

  @ApiProperty({
    example: '2024-08-15',
    description: 'Data de vencimento da parcela.',
  })
  @IsDateString()
  maturity: string;
}

export class CreateLoanDto {
  @ApiProperty({
    example: 50000,
    description: 'Valor total solicitado para o empréstimo. Deve ser maior ou igual a 50.000.',
  })
  @IsNumber()
  @Min(50000)
  requiredValue: number;

  @ApiProperty({
    example: 12,
    description: 'Número de parcelas do empréstimo.',
  })
  @IsNumber()
  amountMonth: number;

  @ApiProperty({
    example: 5.5,
    description: 'Taxa de juros do empréstimo em porcentagem.',
  })
  @IsNumber()
  interestRate: number;

  @ApiProperty({
    example: 24,
    description: 'Número de meses para o pagamento total do empréstimo.',
  })
  @IsNumber()
  monthsPayOff: number;

  @ApiProperty({
    example: 10500,
    description: 'Valor total dos juros pagos ao longo do período do empréstimo.',
  })
  @IsNumber()
  totalInterest: number;

  @ApiProperty({
    example: 60500,
    description: 'Valor total a ser pago ao longo do período do empréstimo, incluindo juros.',
  })
  @IsNumber()
  totalPay: number;

  @ApiProperty({
    example: 'SP',
    description: 'Unidade Federativa do empréstimo.',
    enum: UFs,
  })
  @IsEnum(UFs)
  uf: UFs;

  @ApiProperty({
    example: 'ACTIVE',
    description: 'Estado atual do empréstimo.',
    enum: LoanState,
  })
  @IsEnum(LoanState)
  state: LoanState;

  @ApiProperty({
    type: [SimulateDto],
    description: 'Lista de simulações associadas ao empréstimo.',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SimulateDto)
  simulates: SimulateDto[];
}