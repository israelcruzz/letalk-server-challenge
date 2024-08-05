import { Injectable } from '@nestjs/common';
import { loanSimulate, LoanSimulateType } from '../utils/loan-simulate';
import { SimulateLoanDto } from './dto/simulate-loan.dto';

@Injectable()
export class SimulateService {

  public simulate(body: SimulateLoanDto) {
    const simulateData: SimulateLoanDto = {
      monthlyPayment: body.monthlyPayment,
      totalDebt: body.totalDebt,
      uf: body.uf,
    };

    const simulate = loanSimulate(simulateData as LoanSimulateType);

    return simulate;
  }
}
