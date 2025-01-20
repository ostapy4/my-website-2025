"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";

import { FormTextInput } from "common/FormInputs";
import { Button } from "common/UI";

import { getDefaults } from "utils/zod";

export const emailSchema = z.object({
  email: z.string().email().default(""),
});

type Form = z.infer<typeof emailSchema>;
export function HeroEmailForm() {
  const form = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: getDefaults(emailSchema),
  });

  function onSubmit(data: Form) {
    return data;
  }
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={"flex flex-col gap-x-2 gap-y-3 sm:flex-row"}>
          <FormTextInput fieldName={"email"} placeholder={"Email"} />
          <Button type={"submit"} className={{ button: "max-h-[46px]" }}>
            Send
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
