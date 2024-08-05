import { Loan } from '@prisma/client';
import { CreateLoanDto } from '../dto/create-loan.dto';

export abstract class LoanRepositoryInterface {
  store: (data: CreateLoanDto, userId: string) => Promise<{ loan: string }>;
  findMany: (userId: string) => Promise<Loan[]>;
  show: (loanId: string) => Promise<Loan>;
  updateState: (loanId: string) => Promise<{
    loanId: string;
  }>;
  findById: (loanId: string) => Promise<Loan>;
}
