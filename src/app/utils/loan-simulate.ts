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

interface LoanSimulateType {
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
    MG: 0.8,
    RJ: 0.9,
    ES: 1.11,
  };

  const monthlyInterestRate = ufValues[uf] / 100;

  let remainingDebt = totalDebt;
  let totalPaid = 0;
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
    simulations,
    totalMonths: months,
    totalPrice: parseFloat(totalPaid.toFixed(2)),
  };

  return response;
};
