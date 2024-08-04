import { Body, Controller, HttpCode, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ZodValidatePipe } from '../pipes/zod-validation-type';
import {
  createAccountBodySchema,
  createAccountBodySchemaType,
} from './dto/create-account-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  @UsePipes(new ZodValidatePipe(createAccountBodySchema))
  public async signUp(@Body() body: createAccountBodySchemaType) {
    const bodyData = body;

    const account = await this.authService.signUp(bodyData);

    return account;
  }
}
