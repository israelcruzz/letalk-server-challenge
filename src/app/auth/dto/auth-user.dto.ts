import { z } from 'zod';

export const authUserSchema = z.object({
  email: z.coerce.string().email(),
  password: z.string().min(8),
});

export type IAuthUserSchema = z.infer<typeof authUserSchema>;
