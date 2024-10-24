import { z } from 'zod';

export const schema = z.object({
  agreeToTerms: z
    .boolean()
    .refine((val) => val === true, 'You must agree to terms'),
});
