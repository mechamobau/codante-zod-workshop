import { z } from 'zod';

export const schema = z.object({
  age: z.number().min(18, 'Must be at least 18').max(99, 'Must be under 99'),
});
