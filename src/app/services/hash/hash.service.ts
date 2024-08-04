import { Injectable } from '@nestjs/common';
import bcryptjs from 'bcryptjs';

@Injectable()
export class HashService {
  public async hashPassword(password: string) {
    const hashPassword = await bcryptjs.hash(password, 6);

    return hashPassword;
  }

  public async comparePasswords(password: string, hashpassword: string) {
    const compare = await bcryptjs.compare(password, hashpassword);

    return compare;
  }
}
