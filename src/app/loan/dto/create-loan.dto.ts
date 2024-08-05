import { IsNotEmpty, IsNumber, Min, IsEnum, IsArray, ValidateNested, IsDateString } from 'class-validator';
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
  @IsNumber()
  debitBalance: number;

  @IsNumber()
  fees: number;

  @IsNumber()
  adjustedDebitBalance: number;

  @IsNumber()
  installmentValue: number;

  @IsDateString()
  maturity: string;
}

export class CreateLoanDto {
  @IsNumber()
  @Min(50000)
  requiredValue: number;

  @IsNumber()
  amountMonth: number;

  @IsNumber()
  interestRate: number;

  @IsNumber()
  monthsPayOff: number;

  @IsNumber()
  totalInterest: number;

  @IsNumber()
  totalPay: number;

  @IsEnum(UFs)
  uf: UFs;

  @IsEnum(LoanState)
  state: LoanState;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SimulateDto)
  simulates: SimulateDto[];
}
