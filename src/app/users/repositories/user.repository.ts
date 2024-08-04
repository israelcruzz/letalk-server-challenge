import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/services/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}
}
