import { createAccountBodySchemaType } from "../dto/create-account-dto";

export interface AuthRepositoriesInterface {
  store: (user: createAccountBodySchemaType) => Promise<{ account: string }>;
}
