import {
  Controller,
  Post,
  Body, Get,
  UseGuards,
  InternalServerErrorException,
  HttpCode,
  HttpStatus
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../guards/jwt-auth-guard';
import { CurrentUser } from '../decorators/current-user';
import { TokenPayload } from '../auth/strategies/jwt-strategy';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() body: CreateUserDto) {
    try {
      const response = await this.usersService.create(body);

      return response;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async view(@CurrentUser() user: TokenPayload) {
    try {
      const response = await this.usersService.findById(user.sub);

      return response;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
