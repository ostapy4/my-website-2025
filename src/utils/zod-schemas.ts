import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().email().default(""),
});

export const contactsSchema = z.object({
  firstname: z.string().nonempty("Please write your name").default(""),
  email: z.string().email().default(""),
  phone: z.string().default(""),
  plan: z.string().default(""),
  message: z.string().default(""),
});
