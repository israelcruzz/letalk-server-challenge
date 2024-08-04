import { Injectable } from '@nestjs/common';
import { createAccountBodySchemaType } from './dto/create-account-dto';
import { HashService } from '../services/hash/hash.service';
import { AuthRepositoriesInterface } from './repositories/auth-repositories.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepositoriesInterface,
    private readonly hash: HashService,
  ) {}

  public async signUp(user: createAccountBodySchemaType) {
    const userPasswordHash = await this.hash.hashPassword(user.password);

    const userData: createAccountBodySchemaType = {
      name: user.name,
      email: user.email,
      password: userPasswordHash,
      birthDate: user.birthDate,
      cpf: user.cpf,
    };

    const account = await this.authRepository.store(userData);

    return account;
  }
}
