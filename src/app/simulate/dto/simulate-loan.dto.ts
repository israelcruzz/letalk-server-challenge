import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, Min } from 'class-validator';

export enum UFs {
  SP = 'SP',
  MG = 'MG',
  RJ = 'RJ',
  ES = 'ES',
}

export class SimulateLoanDto {
  @ApiProperty({
    example: 500.0,
    description:
      'Valor da parcela mensal do empréstimo. Deve ser um número positivo.',
  })
  @IsNumber({}, { message: 'Monthly payment must be a number' })
  @Min(0, { message: 'Monthly payment must be a positive number' })
  monthlyPayment: number;

  @ApiProperty({
    example: 10000.0,
    description: 'Total da dívida do empréstimo. Deve ser um número positivo.',
  })
  @IsNumber({}, { message: 'Total debt must be a number' })
  @Min(0, { message: 'Total debt must be a positive number' })
  totalDebt: number;

  @ApiProperty({
    example: 'SP',
    description:
      'Unidade Federativa onde o empréstimo foi realizado. Deve ser um dos valores permitidos: SP, MG, RJ, ES.',
    enum: UFs,
  })
  @IsEnum(UFs, {
    message: 'UF must be one of the following values: SP, MG, RJ, ES',
  })
  @IsNotEmpty({ message: 'UF is required' })
  uf: UFs;
}
