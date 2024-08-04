import { Module } from '@nestjs/common';
import { UsersModule } from './app/users/users.module';
import { PrismaService } from './app/services/prisma/prisma.service';
import { AuthModule } from './app/auth/auth.module';
import { HashService } from './app/services/hash/hash.service';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './app/utils/env';
import { LoanModule } from './app/loan/loan.module';
import { SimulateModule } from './app/simulate/simulate.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    LoanModule,
    SimulateModule,
  ],
  controllers: [],
  providers: [PrismaService, HashService],
})
export class AppModule {}
