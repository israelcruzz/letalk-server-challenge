import { Injectable } from '@nestjs/common';
import { LoanRepositoryInterface } from './repositorie/loan.repository-interface';
import { CreateLoanDto } from './dto/create-loan.dto';

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
}
