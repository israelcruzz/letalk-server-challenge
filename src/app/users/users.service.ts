import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { HashService } from '../services/hash/hash.service';
import { UserRepositoryInterface } from './repositories/user.repository-interface';
import { User } from './entities/user.entity';
import { MESSAGE_HELPERS } from '../helpers/messages-helpers';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UserRepositoryInterface,
    private readonly hashService: HashService,
  ) {}

  public async create(user: CreateUserDto) {
    try {
      const verifyUserExistWithSameEmail =
        await this.usersRepository.findByEmail(user.email);

      if (verifyUserExistWithSameEmail) {
        throw new NotFoundException(MESSAGE_HELPERS.userEmailExist);
      }

      const hashPassword = await this.hashService.hashPassword(user.password);

      const userData = new User({
        name: user.name,
        email: user.email,
        password: hashPassword,
        cpf: user.cpf,
        birthDate: user.birthDate,
      });

      const account = await this.usersRepository.store(userData);

      return account;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MESSAGE_HELPERS.systemError);
    }
  }

  public async findByEmail(email: string) {
    try {
      const user = await this.usersRepository.findByEmail(email);

      return user;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MESSAGE_HELPERS.systemError);
    }
  }

  public async findById(id: string) {
    try {
      const user = await this.usersRepository.findById(id);

      if (!user) {
        throw new BadRequestException(MESSAGE_HELPERS.userError);
      }

      return user;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MESSAGE_HELPERS.systemError);
    }
  }
}
