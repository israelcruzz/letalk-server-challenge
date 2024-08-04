import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class HashService {
  public async hashPassword(password: string) {
    const hashPassword = await bcrypt.hash(password, 6);

    return hashPassword;
  }

  public async comparePasswords(password: string, hashpassword: string) {
    const compare = await bcrypt.compare(password, hashpassword);

    return compare;
  }
}