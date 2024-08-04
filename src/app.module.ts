import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './app/users/users.module';
import { PrismaService } from './app/services/prisma/prisma.service';
import { AuthModule } from './app/auth/auth.module';
import { HashService } from './app/services/hash/hash.service';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, HashService],
})
export class AppModule {}
