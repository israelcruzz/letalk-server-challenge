import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { z } from 'zod';

const createAccountBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  cpf: z.string(),
  birthDate: z.coerce.date(),
});

type createAccountBodySchema = z.infer<typeof createAccountBodySchema>

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  public async signUp(@Body() createUserDto: any) {}
}
