export interface ISimulation {
  debitBalance: number;
  fees: number;
  adjustedDebitBalance: number;
  installmentValue: number;
  maturity: Date;
}

export interface ResponseSimulate {
  simulations: ISimulation[];
  totalMonths: number;
  totalPrice: number;
}

export interface LoanSimulateType {
  monthlyPayment: number;
  totalDebt: number;
  uf: 'SP' | 'MG' | 'RJ' | 'ES';
}

export const loanSimulate = ({
  monthlyPayment,
  totalDebt,
  uf,
}: LoanSimulateType): ResponseSimulate => {
  let simulations: ISimulation[] = [];

  const ufValues = {
    SP: 1,
    MG: 0.80,
    RJ: 0.90,
    ES: 1.11,
  };

  const monthlyInterestRate = ufValues[uf] / 100;

  let remainingDebt = totalDebt;
  let totalPaid = 0;
  let totalInterestPaid = 0;
  let months = 0;
  let currentDate = new Date();

  while (remainingDebt > 0) {
    const interestForTheMonth = parseFloat(
      (remainingDebt * monthlyInterestRate).toFixed(2),
    );
    const adjustedDebitBalance = parseFloat(
      (remainingDebt + interestForTheMonth).toFixed(2),
    );
    let paymentForTheMonth = parseFloat(
      Math.min(monthlyPayment, adjustedDebitBalance).toFixed(2),
    );
    const newRemainingDebt = parseFloat(
      (adjustedDebitBalance - paymentForTheMonth).toFixed(2),
    );
    totalPaid += paymentForTheMonth;
    totalInterestPaid += interestForTheMonth;
    months++;

    let paymentDate = new Date(currentDate);
    paymentDate.setMonth(currentDate.getMonth() + months);

    simulations.push({
      debitBalance: parseFloat(remainingDebt.toFixed(2)),
      fees: interestForTheMonth,
      adjustedDebitBalance: adjustedDebitBalance,
      installmentValue: paymentForTheMonth,
      maturity: paymentDate,
    });

    remainingDebt = newRemainingDebt;
  }

  const response = {
    priceRequired: totalDebt,
    fees: ufValues[uf],
    totalMonths: months,
    totalPrice: parseFloat(totalPaid.toFixed(2)),
    monthlyPayment,
    totalFees: totalInterestPaid,
    simulations,
  };

  return response;
};
