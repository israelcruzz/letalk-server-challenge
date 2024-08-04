export enum State {
  PENDING,
  ACTIVE,
  CANCELED,
}

export interface ILoan {
  id: string;
  requiredValue: number;
  amountMonth: number;
  interestRate: number;
  monthsPayOff: number;
  totalInterest: Date;
  totalPay: string;
  uf: 'SP' | 'MG' | 'ES' | 'RJ';
  userId: string;
  createdAt: string;
  state?: State;
}

export class Loan {
  public id: string;
  public requiredValue: number;
  public amountMonth: number;
  public interestRate: number;
  public monthsPayOff: number;
  public totalInterest: Date;
  public totalPay: string;
  public uf: 'SP' | 'MG' | 'ES' | 'RJ';
  public userId: string;
  public createdAt: string;
  public state?: State;

  constructor({
    requiredValue,
    amountMonth,
    interestRate,
    monthsPayOff,
    totalInterest,
    totalPay,
    uf,
    userId,
    createdAt,
    state = State.PENDING,
  }: Partial<ILoan>) {
    this.id = crypto.randomUUID();
    this.requiredValue = requiredValue;
    this.amountMonth = amountMonth;
    this.interestRate = interestRate;
    this.monthsPayOff = monthsPayOff;
    this.totalInterest = totalInterest;
    this.totalPay = totalPay;
    this.uf = uf;
    this.userId = userId;
    this.createdAt = createdAt;
    this.state = state;
  }
}
