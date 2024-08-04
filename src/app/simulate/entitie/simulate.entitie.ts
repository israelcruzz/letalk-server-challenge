interface ISimulate {
  id: string;
  debitBalance: number;
  fees: number;
  adjustedDebitBalance: number;
  installmentValue: number;
  maturity: Date;
  loanId: string;
}

export class Simulate {
  public id: string;
  public debitBalance: number;
  public fees: number;
  public adjustedDebitBalance: number;
  public installmentValue: number;
  public maturity: Date;
  public loanId: string;

  constructor({
    debitBalance,
    fees,
    adjustedDebitBalance,
    installmentValue,
    maturity,
    loanId,
  }: Partial<ISimulate>) {
    this.id = crypto.randomUUID();
    this.debitBalance = debitBalance;
    this.fees = fees;
    this.adjustedDebitBalance = adjustedDebitBalance;
    this.installmentValue = installmentValue;
    this.maturity = maturity;
    this.loanId = loanId;
  }
}
