"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Title } from "common";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { FormSelectInput, FormTextInput } from "common/FormInputs";
import { Button } from "common/UI";

import { send_contacts } from "actions/emails";
import { getDefaults } from "utils/zod";
import { contactsSchema } from "utils/zod-schemas";

type Form = z.infer<typeof contactsSchema>;
export function ContactsForm() {
  const form = useForm({
    resolver: zodResolver(contactsSchema),
    defaultValues: getDefaults(contactsSchema),
  });

  async function onSubmit(data: Form) {
    try {
      const res = await send_contacts(data);
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
    <section>
      <Container>
        <div className={"py-8"}>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Title className={"mb-6 text-center"}>Contact Form</Title>
              <div
                className={
                  "mx-auto flex flex-col gap-x-2 gap-y-3 md:max-w-screen-sm"
                }
              >
                <FormTextInput
                  fieldName={"firstname"}
                  placeholder={"Your name"}
                  label={"First name"}
                />
                <FormTextInput
                  fieldName={"email"}
                  placeholder={"Your email"}
                  label={"Email"}
                />
                <FormTextInput
                  fieldName={"phone"}
                  placeholder={"Phone"}
                  label={"Phone"}
                />
                <FormSelectInput
                  fieldName={"plan"}
                  display={"Choose plan"}
                  label={"Plan"}
                  options={[
                    { value: "free", label: "Free" },
                    { value: "full-lesson", label: "Full lesson" },
                    { value: "3-lessons", label: "3 Lessons" },
                    { value: "10-lessons", label: "10 Lessons" },
                  ]}
                />

                <FormTextInput
                  fieldName={"message"}
                  placeholder={"Add additional information"}
                  label={"Message"}
                  multiline
                />
                <Button type={"submit"} className={{ button: "max-h-[46px]" }}>
                  Send
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </Container>
    </section>
  );
}
