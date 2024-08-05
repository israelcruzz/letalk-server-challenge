import { CreateLoanDto } from '../dto/create-loan.dto';

export abstract class LoanRepositoryInterface {
  store: (data: CreateLoanDto, userId: string) => Promise<{ loan: string }>;
}
