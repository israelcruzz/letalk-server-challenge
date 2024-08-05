import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength, Validate, IsDate, IsOptional } from 'class-validator';
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
  @ApiProperty({
    description: 'The name of the user.',
    example: 'Paulo Salvatore',
  })
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({
    description: 'The email address of the user.',
    example: 'email@email.com',
  })
  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({
    description: 'The password of the user. Minimum length of 8 characters.',
    example: '123@abc',
  })
  @IsString({ message: 'Password must be a string' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;

  @ApiProperty({
    description: 'The CPF of the user. Must be a valid CPF.',
    example: '123.456.789-09',
  })
  @IsString({ message: 'CPF must be a string' })
  @Validate(IsValidCPF, { message: 'Invalid CPF' })
  cpf: string;

  @ApiProperty({
    description: 'The birth date of the user.',
    example: '1990-01-01T00:00:00.000Z',
    type: String,
  })
  @Type(() => Date)
  @IsDate({ message: 'Invalid date' })
  birthDate: Date;
}
