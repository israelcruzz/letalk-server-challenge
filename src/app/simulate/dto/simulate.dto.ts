import { z } from 'zod';

const UFs = z.enum(['SP', 'MG', 'RJ', 'ES']);

export const simulateLoanSchemaDto = z.object({
  monthlyPayment: z.number(),
  totalDebt: z.number(),
  uf: UFs,
});

export type ISimulateLoanDto = z.infer<typeof simulateLoanSchemaDto>;
