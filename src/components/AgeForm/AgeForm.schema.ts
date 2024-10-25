import { z } from 'zod';

export const schema = z.object({
  // Validação da idade deve:
  // - Ser um número
  // - Ser maior ou igual a 18
  // - Ser menor ou igual a 99
});
