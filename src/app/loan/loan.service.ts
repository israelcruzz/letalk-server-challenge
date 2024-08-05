import { BadRequestException, Injectable } from '@nestjs/common';
import { LoanRepositoryInterface } from './repositorie/loan.repository-interface';
import { CreateLoanDto } from './dto/create-loan.dto';
import { MESSAGE_HELPERS } from '../helpers/messages-helpers';
import { State } from './entitie/loan.entitie';

@Injectable()
export class LoanService {
  constructor(private readonly loanRepository: LoanRepositoryInterface) {}

  public async store(data: CreateLoanDto, userId: string) {
    const loan = await this.loanRepository.store(data, userId);

    return loan;
  }

  public async findMany(userId: string) {
    const loans = await this.loanRepository.findMany(userId);

    return loans;
  }

  public async show(loanId: string) {
    const loan = await this.loanRepository.show(loanId);

    if (!loan) {
      throw new BadRequestException(MESSAGE_HELPERS.loanError);
    }

    return loan;
  }

  public async updateState(loanId: string) {
    const loan = await this.loanRepository.updateState(loanId);

    return loan;
  }
}
