import { z } from 'zod';

export const schema = z.object({
  phone: z.string().regex(/^\d{10}$/, 'Must be a 10-digit phone number'),
});
