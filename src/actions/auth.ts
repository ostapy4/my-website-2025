"use server";

import crypto from "crypto";
import { cookies } from "next/headers";
import { authSchema } from "utils/zod-schemas";
import { z } from "zod";

type Credentials = z.infer<typeof authSchema>;

export async function check_credentials(data: Credentials) {
  const parsed = authSchema.safeParse(data);
  if (!parsed.success) {
    return { error: "Invalid input data.", success: false };
  }
  const { email, password } = parsed.data;

  if (email !== process.env.AUTH_EMAIL) {
    return {
      error: "This email doesn`t have permission for this page",
      success: false,
    };
  }

  const storedPassword = process.env.AUTH_PASSWORD ?? "";
  const inputPassword = Buffer.from(password);
  const actualPassword = Buffer.from(storedPassword);

  if (
    inputPassword.length !== actualPassword.length ||
    !crypto.timingSafeEqual(inputPassword, actualPassword)
  ) {
    return { error: "Wrong password. Try again.", success: false };
  }

  const cookieStore = await cookies();
  cookieStore.set("isAdmin", "true", {
    path: "/",
    maxAge: 60 * 60 * 24,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return { success: true, message: "Authentication successful." };
}
