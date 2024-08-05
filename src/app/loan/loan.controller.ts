import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
  UseGuards
} from '@nestjs/common';
import { CurrentUser } from '../decorators/current-user';
import { TokenPayload } from '../auth/strategies/jwt-strategy';
import { CreateLoanDto } from './dto/create-loan.dto';
import { JwtAuthGuard } from '../guards/jwt-auth-guard';
import { LoanService } from './loan.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('loan')
@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(JwtAuthGuard)
  public async create(
    @CurrentUser() user: TokenPayload,
    @Body() body: CreateLoanDto,
  ) {
    try {
      const response = await this.loanService.store(body, user.sub);

      return response;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  public async findMany(@CurrentUser() user: TokenPayload) {
    try {
      const response = await this.loanService.findMany(user.sub);

      return response;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  @Get('/:loanId')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  public async view(@Param('loanId') loanId: string) {
    try {
      const response = await this.loanService.show(loanId);

      return response;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  @Patch('/:loanId')
  @HttpCode(HttpStatus.ACCEPTED)
  @UseGuards(JwtAuthGuard)
  public async cancelLoan(@Param('loanId') loanId: string) {
    try {
      const response = await this.loanService.updateState(loanId);

      return response;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
