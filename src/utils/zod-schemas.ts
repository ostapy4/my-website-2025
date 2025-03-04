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

export const sheetsSchema = z.object({
  id: z.string().optional(),
  title: z.string().nonempty("Title is required"),
  description: z.string().nonempty("Description is required"),
  pdfUrl: z.string().nonempty("File is required"),
  price: z.number().int().default(0),
});