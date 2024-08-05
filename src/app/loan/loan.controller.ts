import {
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CurrentUser } from '../decorators/current-user';
import { TokenPayload } from '../auth/strategies/jwt-strategy';
import { CreateLoanDto } from './dto/create-loan.dto';
import { JwtAuthGuard } from '../guards/jwt-auth-guard';
import { LoanService } from './loan.service';

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  public async create(
    @CurrentUser() user: TokenPayload,
    @Body() body: CreateLoanDto,
  ) {
    const response = await this.loanService.store(body, user.sub);

    return response;
  }
}
