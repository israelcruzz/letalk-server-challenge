import {
  Body,
  Controller, Post, UsePipes
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ZodValidatePipe } from '../pipes/zod-validation-type';
import { AuthUserDto } from './dto/auth-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  public async authenticate(@Body() body: AuthUserDto) {
    const response = await this.authService.authenticate(body);

    return response;
  }
}
