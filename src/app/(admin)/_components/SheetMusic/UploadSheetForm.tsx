"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { FormTextInput } from "common/FormInputs";
import { Button } from "common/UI";

import { upload_sheets } from "actions/sheet-music";
import { UploadButton } from "utils/uploadthing";
import { getDefaults } from "utils/zod";

const formSchema = z.object({
  title: z.string().nonempty("Title is required"),
  description: z.string().nonempty("Description is required"),
  pdfUrl: z.string().nonempty("File is required"),
});

type Form = z.infer<typeof formSchema>;

export function UploadSheetForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  async function onSubmit(data: Form) {
    try {
      const res = await upload_sheets(data);
      if (res) {
        toast.success("Sheet music uploaded successfully");
        form.reset();
      }
    } catch (err) {
      console.error("Error during submission:", err);
      if (err instanceof Error) {
        toast.error(err.message);
      }
    }
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"lg:max-w-screen-sm"}
      >
        <div className={"flex flex-col gap-y-5"}>
          <div className={"flex flex-col gap-y-3"}>
            <FormTextInput
              fieldName={"title"}
              label={"Title"}
              placeholder={"Sheet title"}
              variants={"cms"}
            />
            <FormTextInput
              fieldName={"description"}
              label={"Description"}
              placeholder={"Sheet description"}
              multiline
              variants={"cms"}
            />
            <UploadButton
              endpoint={"pdfUploader"}
              onClientUploadComplete={(res) => {
                if (!res) return;
                form.setValue("pdfUrl", res[0].ufsUrl ?? "");
              }}
              onUploadError={(error: Error) => {
                console.error(`ERROR! ${error.message}`);
              }}
            />
            {form.formState.errors && form.formState.errors.pdfUrl && (
              <p className={"text-center text-sm text-red-500"}>
                {form.formState.errors.pdfUrl?.message?.toString()}
              </p>
            )}
          </div>
          <Button
            type={"submit"}
            loading={form.formState.isSubmitting || form.formState.isLoading}
            colorVariant={"cms"}
            className={{ loadingIcon: "text-lime-300" }}
          >
            Save
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
