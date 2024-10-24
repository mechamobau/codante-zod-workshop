import { z } from 'zod';

export const schema = z.object({
  website: z.string().url('Must be a valid URL'),
});
