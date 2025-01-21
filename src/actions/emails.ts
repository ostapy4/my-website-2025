"use server";

import { Resend } from "resend";
import { z } from "zod";

import { EmailTemplate } from "components/EmailTemplate";

import { emailSchema } from "utils/zod-schemas";

const resend = new Resend(process.env.RESEND_API_KEY);
type SendEmailResponse = { success?: string; error?: string };

export const send_email = async (
  data: z.infer<typeof emailSchema>,
): Promise<SendEmailResponse> => {
  const parsedData = emailSchema.safeParse(data);

  if (!parsedData.success)
    return { error: parsedData.error?.issues[0].message };

  try {
    const { error } = await resend.emails.send({
      from: "Ostap Konashuk <no-reply@website-testing.website>",
      // to: ["ostap.konashuk@gmail.com"],
      to: ["stadnyk.andy@gmail.com"],
      subject: "Test Free Lesson",
      react: EmailTemplate({
        email: parsedData.data.email,
      }) as React.ReactElement,
    });

    if (error) {
      return { error: error.message };
    }
    return { success: "Email send successfully" };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "Unknown error occurred" };
  }
};
