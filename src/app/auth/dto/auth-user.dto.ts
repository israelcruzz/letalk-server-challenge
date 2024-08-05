import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';

export class AuthUserDto {
  @ApiProperty({
    example: 'email@example.com',
    description: 'O e-mail é necessário para o login e deve ser um endereço de e-mail válido.',
  })
  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({
    example: '123@abc',
    description: 'A senha deve ter pelo menos 8 caracteres e incluir pelo menos um número.',
  })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/\d/, { message: 'Password must contain at least one number' })
  password: string;
}
