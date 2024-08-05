import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { MESSAGE_HELPERS } from '../helpers/messages-helpers';
import { HashService } from '../services/hash/hash.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Env } from '../utils/env';
import { AuthUserDto } from './dto/auth-user.dto';

@Injectable()
export class AuthService {
  private secret: string;

  constructor(
    private readonly userService: UsersService,
    private readonly hashService: HashService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService<Env, true>,
  ) {
    this.secret = this.configService.get('JWT_SECRET', { infer: true });
  }

  public async authenticate(user: AuthUserDto) {
    const { email, password } = user;

    const findUser = await this.userService.findByEmail(email);

    if (!findUser) {
      throw new NotFoundException(MESSAGE_HELPERS.emailOrPasswordError);
    }

    const validationPassword = await this.hashService.comparePasswords(
      password,
      findUser.password,
    );

    if (!validationPassword) {
      throw new NotFoundException(MESSAGE_HELPERS.emailOrPasswordError);
    }

    const token = this.jwtService.sign(
      { sub: findUser.id },
      { secret: this.secret },
    );

    return {
      token,
    };
  }
}
