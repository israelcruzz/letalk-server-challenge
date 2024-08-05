import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';
import { PrismaService } from '../services/prisma/prisma.service';
import { PrismaLoanRepository } from './repositorie/prisma-loan.repository';
import { LoanRepositoryInterface } from './repositorie/loan.repository-interface';

@Module({
  providers: [
    LoanService,
    PrismaService,
    { provide: LoanRepositoryInterface, useClass: PrismaLoanRepository },
  ],
  controllers: [LoanController],
})
export class LoanModule {}
