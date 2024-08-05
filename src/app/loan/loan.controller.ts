import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
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
import { State } from './entitie/loan.entitie';

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

  @Get()
  @UseGuards(JwtAuthGuard)
  public async findMany(@CurrentUser() user: TokenPayload) {
    const response = await this.loanService.findMany(user.sub);

    return response;
  }

  @Get('/:loanId')
  @UseGuards(JwtAuthGuard)
  public async view(@Param('loanId') loanId: string) {
    const response = await this.loanService.show(loanId);

    return response;
  }

  @Patch('/:loanId')
  @UseGuards(JwtAuthGuard)
  public async cancelLoan(@Param('loanId') loanId: string) {
    const response = await this.loanService.updateState(loanId);

    return response;
  }
}
