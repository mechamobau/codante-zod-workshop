import { z } from 'zod';

export const schema = z.object({
  address: z.object({
    cep: z.string().regex(/^\d{5}-?\d{3}$/, 'Must be a valid CEP format'),
    street: z.string().min(1, 'Street is required'),
    neighborhood: z.string().min(1, 'Neighborhood is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(2, 'State is required'),
  }),
});
