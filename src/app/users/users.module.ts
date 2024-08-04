import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../services/prisma/prisma.service';
import { HashService } from '../services/hash/hash.service';
import { UserRepositoryInterface } from './repositories/user.repository-interface';
import { PrismaUserRepository } from './repositories/prisma-user.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    HashService,
    { provide: UserRepositoryInterface, useClass: PrismaUserRepository },
  ],
})
export class UsersModule {}
