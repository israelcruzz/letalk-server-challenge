import {
  Controller,
  Post,
  Body,
  UsePipes,
  Get,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../guards/jwt-auth-guard';
import { CurrentUser } from '../decorators/current-user';
import { TokenPayload } from '../auth/strategies/jwt-strategy';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  public async create(@Body() body: CreateUserDto) {
    const response = await this.usersService.create(body);

    return response;
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  public async view(@CurrentUser() user: TokenPayload) {
    const response = await this.usersService.findById(user.sub);

    return response;
  }
}
