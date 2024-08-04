import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from '../services/prisma/prisma.service';
import { AuthRepositoriesInterface } from './repositories/auth-repositories.interface';
import { PrismaAuthRepository } from './repositories/prisma-auth.repository';
import { HashService } from '../services/hash/hash.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    HashService,
    {
      provide: AuthRepositoriesInterface,
      useClass: PrismaAuthRepository,
    },
  ],
})
export class AuthModule {}
