import { IsEnum, IsNotEmpty, IsNumber, Min } from 'class-validator';

export enum UFs {
  SP = 'SP',
  MG = 'MG',
  RJ = 'RJ',
  ES = 'ES',
}

export class SimulateLoanDto {
  @IsNumber({}, { message: 'Monthly payment must be a number' })
  @Min(0, { message: 'Monthly payment must be a positive number' })
  monthlyPayment: number;

  @IsNumber({}, { message: 'Total debt must be a number' })
  @Min(0, { message: 'Total debt must be a positive number' })
  totalDebt: number;

  @IsEnum(UFs, { message: 'UF must be one of the following values: SP, MG, RJ, ES' })
  @IsNotEmpty({ message: 'UF is required' })
  uf: UFs;
}
