import { Injectable } from '@nestjs/common';
import { AuthRepositoriesInterface } from './repositories/auth-repositories.interface';
import { createAccountBodySchemaType } from './dto/create-account-dto';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepositoriesInterface) {}

  public async signUp(user: createAccountBodySchemaType) { 
    const account = await this.authRepository.store(user);
    return account;
  }
}
