import { BadRequestException, Injectable } from '@nestjs/common';
import { LoanRepositoryInterface } from './repositorie/loan.repository-interface';
import { CreateLoanDto } from './dto/create-loan.dto';
import { MESSAGE_HELPERS } from '../helpers/messages-helpers';
import { State } from './entitie/loan.entitie';

@Injectable()
export class LoanService {
  constructor(private readonly loanRepository: LoanRepositoryInterface) {}

  public async store(data: CreateLoanDto, userId: string) {
    try {
      const loan = await this.loanRepository.store(data, userId);

      return loan;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MESSAGE_HELPERS.systemError);
    }
  }

  public async findMany(userId: string) {
    try {
      const loans = await this.loanRepository.findMany(userId);

      return loans;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MESSAGE_HELPERS.systemError);
    }
  }

  public async show(loanId: string) {
    try {
      const loan = await this.loanRepository.show(loanId);

      if (!loan) {
        throw new BadRequestException(MESSAGE_HELPERS.loanError);
      }

      return loan;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MESSAGE_HELPERS.systemError);
    }
  }

  public async updateState(loanId: string) {
    try {
      const verifyLoan = await this.loanRepository.findById(loanId);

      if (!verifyLoan) {
        throw new BadRequestException(MESSAGE_HELPERS.loanError);
      }

      const loan = await this.loanRepository.updateState(loanId);

      return loan;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MESSAGE_HELPERS.systemError);
    }
  }
}
