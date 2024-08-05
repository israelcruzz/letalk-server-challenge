import { BadRequestException, Injectable } from '@nestjs/common';
import { loanSimulate, LoanSimulateType } from '../utils/loan-simulate';
import { SimulateLoanDto } from './dto/simulate-loan.dto';
import { MESSAGE_HELPERS } from '../helpers/messages-helpers';

@Injectable()
export class SimulateService {
  public simulate(body: SimulateLoanDto) {
    try {
      const simulateData: SimulateLoanDto = {
        monthlyPayment: body.monthlyPayment,
        totalDebt: body.totalDebt,
        uf: body.uf,
      };

      const simulate = loanSimulate(simulateData as LoanSimulateType);

      return simulate;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MESSAGE_HELPERS.systemError);
    }
  }
}
