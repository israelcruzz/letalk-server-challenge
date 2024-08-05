import { z } from 'zod';

export const createSimulateDto = z.object({
  debitBalance: z.number(),
  fees: z.number(),
  adjustedDebitBalance: z.number(),
  installmentValue: z.number(),
  maturity: z.coerce.date(),
});

export const createSimulateDtoArray = z.array(createSimulateDto);

export type ICreateSimulateDto = z.infer<typeof createSimulateDto>;
export type ICreateSimulateDtoArray = z.infer<typeof createSimulateDtoArray>;
