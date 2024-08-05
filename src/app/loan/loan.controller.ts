import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CurrentUser } from '../decorators/current-user';
import { TokenPayload } from '../auth/strategies/jwt-strategy';
import { CreateLoanDto } from './dto/create-loan.dto';

@Controller('loan')
export class LoanController {
  @Post('/create')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  public async create(@CurrentUser() user: TokenPayload, @Body() body: CreateLoanDto) {
    return body; 
  }
}
