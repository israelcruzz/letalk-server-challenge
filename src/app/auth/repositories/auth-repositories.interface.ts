import { createAccountBodySchemaType } from '../dto/create-account-dto';

export abstract class AuthRepositoriesInterface {
  store: (user: createAccountBodySchemaType) => Promise<{ account: string }>;
}
