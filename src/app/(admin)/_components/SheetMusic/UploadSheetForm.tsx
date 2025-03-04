"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SheetMusic } from "@prisma/client";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { FormNumberInput, FormTextInput } from "common/FormInputs";
import { Button } from "common/UI";

import { update_sheet, upload_sheets } from "actions/sheet-music";
import { UploadButton } from "utils/uploadthing";
import { getDefaults } from "utils/zod";
import { sheetsSchema } from "utils/zod-schemas";

type Form = z.infer<typeof sheetsSchema>;

type UploadSheetFormProps = {
  data?: SheetMusic | null;
  resetSheetState: () => void;
};

export function UploadSheetForm({
  data,
  resetSheetState,
}: UploadSheetFormProps) {
  const form = useForm({
    resolver: zodResolver(sheetsSchema),
    defaultValues: getDefaults(sheetsSchema),
  });

  useEffect(() => {
    if (data) {
      form.reset({
        id: data.id,
        title: data.title,
        description: data.description,
        pdfUrl: data.pdfUrl,
        price: data.price,
      });
    }
  }, [data, form]);

  async function onSubmit(data: Form) {
    try {
      if (data.id) {
        const res = await update_sheet(data);
        console.log("submitRes: ", res);

        if (res) {
          toast.success("Sheet was updated successfully");
          form.reset(getDefaults(sheetsSchema));
          resetSheetState();
        }
      } else {
        const res = await upload_sheets(data);
        if (res) {
          toast.success("Sheet music uploaded successfully");
          form.reset(getDefaults(sheetsSchema));
        }
      }
    } catch (err) {
      console.error("Error during submission:", err);
      toast.error(err instanceof Error ? err.message : "An error occurred");
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
            <FormNumberInput
              fieldName={"price"}
              label={"Price"}
              placeholder={"Price"}
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
            colorVariant={"danger"}
            onClick={() => {
              resetSheetState();
              form.reset(getDefaults(sheetsSchema));
            }}
          >
            Reset Form
          </Button>
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
