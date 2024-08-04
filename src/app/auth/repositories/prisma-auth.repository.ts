import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/services/prisma/prisma.service';
import { createAccountBodySchemaType } from '../dto/create-account-dto';
import { AuthRepositoriesInterface } from './auth-repositories.interface';

@Injectable()
export class PrismaAuthRepository implements AuthRepositoriesInterface {
  constructor(private readonly prismaService: PrismaService) {}

  public async store(user: createAccountBodySchemaType) {
    const account = await this.prismaService.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        cpf: parseFloat(user.cpf),
        birthDate: user.birthDate,
      },
    });

    return { account: account.id };
  }
}
