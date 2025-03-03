import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email().default(""),
  password: z.string().nonempty().default(""),
});
