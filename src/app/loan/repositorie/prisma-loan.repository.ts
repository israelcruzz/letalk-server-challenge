import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/services/prisma/prisma.service';
import { LoanRepositoryInterface } from './loan.repository-interface';
import { CreateLoanDto } from '../dto/create-loan.dto';

@Injectable()
export class PrismaLoanRepository implements LoanRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  public async store(data: CreateLoanDto, userId: string) {
    const {
      amountMonth,
      interestRate,
      monthsPayOff,
      requiredValue,
      totalInterest,
      totalPay,
      uf,
      simulates,
    } = data;

    const loan = await this.prismaService.loan.create({
      data: {
        amountMonth,
        interestRate,
        monthsPayOff,
        requiredValue,
        totalInterest,
        totalPay,
        uf,
        state: 'ACTIVE',
        userId,
        simulations: {
          createMany: {
            data: simulates,
          },
        },
      },
    });

    return { loan: loan.id };
  }

  public async findMany(userId: string) {
    const loans = await this.prismaService.loan.findMany({
      where: {
        userId,
      },
    });

    if (loans.length === 0) return null;

    return loans;
  }

  public async show(loanId: string) {
    const loan = await this.prismaService.loan.findUnique({
      where: {
        id: loanId,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            cpf: true,
            birthDate: true,
          },
        },
        simulations: true,
      },
    });

    return loan;
  }
}
