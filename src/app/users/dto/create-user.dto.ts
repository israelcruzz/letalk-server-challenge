import { z } from 'zod';
import { cpf } from 'cpf-cnpj-validator';

export const createUserDto = z.object({
  name: z.coerce.string(),
  email: z.string().email(),
  password: z.string().min(8),
  cpf: z.coerce
    .string()
    .refine((value) => cpf.isValid(value), { message: 'Invalid CPF' }),
  birthDate: z.coerce.date(),
});

export type ICreateUserDto = z.infer<typeof createUserDto>;
