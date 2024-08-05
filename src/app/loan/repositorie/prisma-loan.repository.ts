import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/services/prisma/prisma.service';
import { LoanRepositoryInterface } from './loan.repository-interface';
import { CreateLoanDto } from '../dto/create-loan.dto';
import { State } from '../entitie/loan.entitie';
import { MESSAGE_HELPERS } from 'src/app/helpers/messages-helpers';

@Injectable()
export class PrismaLoanRepository implements LoanRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  public async store(data: CreateLoanDto, userId: string) {
    try {
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
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MESSAGE_HELPERS.databaseError);
    }
  }

  public async findMany(userId: string) {
    try {
      const loans = await this.prismaService.loan.findMany({
        where: {
          userId,
        },
      });

      if (loans.length === 0) return null;

      return loans;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MESSAGE_HELPERS.databaseError);
    }
  }

  public async show(loanId: string) {
    try {
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
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MESSAGE_HELPERS.databaseError);
    }
  }

  public async updateState(loanId: string) {
    try {
      await this.prismaService.loan.update({
        where: {
          id: loanId,
        },
        data: {
          state: 'CANCELED',
        },
      });

      return { loanId };
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MESSAGE_HELPERS.databaseError);
    }
  }

  public async findById(loanId: string) {
    try {
      const loan = await this.prismaService.loan.findUnique({
        where: {
          id: loanId,
        },
      });

      return loan;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MESSAGE_HELPERS.databaseError);
    }
  }
}
