import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength, IsDateString, Validate, IsDate } from 'class-validator';
import { cpf } from 'cpf-cnpj-validator';

class IsValidCPF {
  validate(value: string): boolean {
    return cpf.isValid(value);
  }

  defaultMessage(): string {
    return 'Invalid CPF';
  }
}

export class CreateUserDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;

  @IsString({ message: 'CPF must be a string' })
  @Validate(IsValidCPF, { message: 'Invalid CPF' })
  cpf: string;

  @Type(() => Date)
  @IsDate({ message: 'Invalid date' })
  birthDate: Date;
}