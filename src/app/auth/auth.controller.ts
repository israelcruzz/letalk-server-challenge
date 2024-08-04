import {
  Body,
  Controller, Post, UsePipes
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ZodValidatePipe } from '../pipes/zod-validation-type';
import { authUserSchema, IAuthUserSchema } from './dto/auth-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UsePipes(new ZodValidatePipe(authUserSchema))
  public async authenticate(@Body() body: IAuthUserSchema) {
    const response = await this.authService.authenticate(body);

    return response;
  }
}
