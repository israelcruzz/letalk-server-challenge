import { Injectable, NotFoundException } from '@nestjs/common';
import { ICreateUserDto } from './dto/create-user.dto';
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

  public async create(user: ICreateUserDto) {
    const verifyUserExistWithSameEmail = await this.usersRepository.findByEmail(
      user.email,
    );

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
  }
}
