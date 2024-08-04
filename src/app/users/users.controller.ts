import { Controller, Post, Body, UsePipes, BadRequestException, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto, ICreateUserDto } from './dto/create-user.dto';
import { ZodValidatePipe } from '../pipes/zod-validation-type';
import { loanSimulate } from '../utils/loan-simulate';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  @UsePipes(new ZodValidatePipe(createUserDto))
  public async create(@Body() body: ICreateUserDto) {
    const response = await this.usersService.create(body);

    return response;
  }

  @Get()
  index(){
    const a = loanSimulate({ monthlyPayment: 15000, totalDebt: 60000, uf: "SP" });

    return a
  }
}
