import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/app/services/prisma/prisma.service';
import { User } from '../entities/user.entity';
import { UserRepositoryInterface } from './user.repository-interface';

@Injectable()
export class PrismaUserRepository implements UserRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  public async store(user: User) {
    const account = await this.prismaService.user.create({
      data: user,
    });

    return { account: account.id };
  }

  public async findByEmail(email: string) {
    const findEmail = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    return findEmail;
  }

  public async findById(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }
}
