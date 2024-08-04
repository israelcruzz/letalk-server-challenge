export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  birthDate: Date;
  createdAt: Date;
}

export class User {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  public cpf: string;
  public birthDate: Date;
  public createdAt: Date;

  constructor({ name, email, password, cpf, birthDate }: Partial<IUser>) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;
    this.cpf = cpf;
    this.birthDate = birthDate;
    this.createdAt = new Date();
  }
}
