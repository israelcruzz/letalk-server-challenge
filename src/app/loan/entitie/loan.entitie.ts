import { Simulate } from 'src/app/simulate/entitie/simulate.entitie';
import { User } from 'src/app/users/entities/user.entity';

export enum State {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  CANCELED = 'CANCELED',
}

export class Loan {
  public id: string;
  public requiredValue: number;
  public amountMonth: number;
  public interestRate: number;
  public monthsPayOff: number;
  public totalInterest: number;
  public totalPay: number;
  public uf: string;
  public userId: string;
  public createdAt: Date;
  public state: State;
  public simulations: Simulate[];
  public user: User;

  constructor(
    id: string,
    requiredValue: number,
    amountMonth: number,
    interestRate: number,
    monthsPayOff: number,
    totalInterest: number,
    totalPay: number,
    uf: string,
    userId: string,
    createdAt: Date,
    state: State,
    simulations: Simulate[],
    user: User,
  ) {
    this.id = id;
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
    this.simulations = simulations;
    this.user = user;
  }
}
