import { Controller, Post, Body, UsePipes, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto, ICreateUserDto } from './dto/create-user.dto';
import { ZodValidatePipe } from '../pipes/zod-validation-type';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  @UsePipes(new ZodValidatePipe(createUserDto))
  public async create(@Body() body: ICreateUserDto) {
    const response = await this.usersService.create(body);

    return response;
  }
}
