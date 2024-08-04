import { User } from '../entities/user.entity';

export abstract class UserRepositoryInterface {
  store: (user: User) => Promise<{ account: string }>;
}
