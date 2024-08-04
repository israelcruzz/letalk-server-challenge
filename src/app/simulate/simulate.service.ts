import { Injectable } from '@nestjs/common';
import { ISimulateLoanDto } from './dto/simulate.dto';
import { loanSimulate, LoanSimulateType } from '../utils/loan-simulate';

@Injectable()
export class SimulateService {
  public simulate(body: ISimulateLoanDto) {
    const simulateData: ISimulateLoanDto = {
      monthlyPayment: body.monthlyPayment,
      totalDebt: body.totalDebt,
      uf: body.uf,
    };

    const simulate = loanSimulate(simulateData as LoanSimulateType);

    return simulate;
  }
}
