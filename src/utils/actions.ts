"use server";

import { Resend } from "resend";
import { toast } from "sonner";
import { z } from "zod";

import { emailSchema } from "components/Forms/HeroEmailForm";

const resend = new Resend(process.env.RESEND_API_KEY);

type FormData = z.infer<typeof emailSchema>;

export const sendEmail = async (data: FormData) => {
  const parsedData = emailSchema.safeParse(data);

  if (!parsedData.success) {
    toast.error(parsedData.error.message);
    return;
  }
  const { email } = parsedData.data;

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["stadnyk.andy@gmail.com"],
      subject: "Hello world",
      text: email,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};
