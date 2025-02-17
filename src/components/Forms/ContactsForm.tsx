"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Container, MotionDiv, Title } from "common";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { FormSelectInput, FormTextInput } from "common/FormInputs";
import { Button } from "common/UI";

import { send_contacts } from "actions/emails";
import { getDefaults } from "utils/zod";
import { contactsSchema } from "utils/zod-schemas";

type Form = z.infer<typeof contactsSchema>;

type ContactsFormProps = {
  plan?: string;
};
export function ContactsForm({ plan }: ContactsFormProps) {
  const form = useForm({
    resolver: zodResolver(contactsSchema),
    defaultValues: getDefaults(contactsSchema),
  });

  useEffect(() => {
    if (plan) {
      form.setValue("plan", plan);
    }
  }, [plan, form]);

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
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Title className={"mb-6 text-center"}>
                  Contact{" "}
                  <span
                    className={
                      "bg-gradient-to-br from-ok_orange-300 to-ok_orange-500 bg-clip-text text-transparent"
                    }
                  >
                    Ostap
                  </span>
                </Title>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
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
                {plan && (
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
                )}

                <FormTextInput
                  fieldName={"message"}
                  placeholder={"Add additional information"}
                  label={"Message"}
                  multiline
                />
                <Button type={"submit"} className={{ button: "max-h-[46px]" }}>
                  Send
                </Button>
              </MotionDiv>
            </form>
          </FormProvider>
        </div>
      </Container>
    </section>
  );
}
