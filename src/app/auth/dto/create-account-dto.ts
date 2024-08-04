import { z } from 'zod';
import { cpf } from 'cpf-cnpj-validator';

export const createAccountBodySchema = z.object({
  name: z.coerce.string(),
  email: z.string().email(),
  password: z.string(),
  cpf: z.coerce.string().refine((value) => cpf.isValid(value), { message: 'Invalid CPF' }),
  birthDate: z.coerce.date(),
});

export type createAccountBodySchemaType = z.infer<
  typeof createAccountBodySchema
>;
