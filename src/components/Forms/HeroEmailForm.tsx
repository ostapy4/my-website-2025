"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { FormTextInput } from "common/FormInputs";
import { Button } from "common/UI";

import { send_email } from "actions/emails";
import { getDefaults } from "utils/zod";
import { emailSchema } from "utils/zod-schemas";

type Form = z.infer<typeof emailSchema>;
export function HeroEmailForm() {
  const form = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: getDefaults(emailSchema),
  });

  async function onSubmit(data: Form) {
    try {
      const res = await send_email(data);
      if (res?.success) {
        toast.success(res.success);
      }
      if (res?.error) {
        toast.error(res.error);
      }
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    } finally {
      form.reset();
    }
  }
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={"flex flex-col gap-x-2 gap-y-3 sm:flex-row"}>
          <FormTextInput
            fieldName={"email"}
            placeholder={"Email"}
            className={{ container: "w-full" }}
          />
          <Button type={"submit"} className={{ button: "max-h-[46px]" }}>
            Send
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
