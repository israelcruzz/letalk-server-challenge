import { Controller, Post, Body, UsePipes, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ZodValidatePipe } from '../pipes/zod-validation-type';
import { loanSimulate } from '../utils/loan-simulate';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  public async create(@Body() body: CreateUserDto) {
    const response = await this.usersService.create(body);

    return response;
  }
}
