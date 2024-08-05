import { User } from '../entities/user.entity';

export abstract class UserRepositoryInterface {
  store: (user: User) => Promise<{ account: string }>;
  findByEmail: (email: string) => Promise<User>;
  findById: (id: string) => Promise<User>;
}
