import { z } from 'zod';

export const schema = z.object({
  gender: z.enum(['male', 'female', 'other'], 'Select a valid gender'),
});
