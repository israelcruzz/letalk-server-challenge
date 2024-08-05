import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/app/services/prisma/prisma.service';
import { User } from '../entities/user.entity';
import { UserRepositoryInterface } from './user.repository-interface';
import { MESSAGE_HELPERS } from 'src/app/helpers/messages-helpers';

@Injectable()
export class PrismaUserRepository implements UserRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  public async store(user: User) {
    try {
      const account = await this.prismaService.user.create({
        data: user,
      });

      return { account: account.id };
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MESSAGE_HELPERS.databaseError);
    }
  }

  public async findByEmail(email: string) {
    try {
      const findEmail = await this.prismaService.user.findUnique({
        where: {
          email,
        },
      });

      return findEmail;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MESSAGE_HELPERS.databaseError);
    }
  }

  public async findById(id: string) {
    try {
      const user = await this.prismaService.user.findUnique({
        where: {
          id,
        },
      });
      
      return user;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MESSAGE_HELPERS.databaseError);
    }
  }
}
