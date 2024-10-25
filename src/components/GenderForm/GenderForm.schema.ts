import { z } from 'zod';

export const schema = z.object({
  gender: z.enum(['male', 'female', 'other'], {
    message: 'Select a valid gender',
  }),
});
