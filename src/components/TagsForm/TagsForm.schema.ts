import { z } from 'zod';

export const schema = z.object({
  tags: z
    .array(z.string().min(1, 'Tag cannot be empty'))
    .min(1, 'Must have at least one tag'),
});
