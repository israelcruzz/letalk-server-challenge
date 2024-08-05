import { Module } from '@nestjs/common';
import { SimulateController } from './simulate.controller';
import { SimulateService } from './simulate.service';
import { PrismaService } from '../services/prisma/prisma.service';

@Module({
  controllers: [SimulateController],
  providers: [SimulateService],
})
export class SimulateModule {}
