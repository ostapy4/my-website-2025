"use client";

import { ImageCard } from "./ImageCard";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadDropzone } from "@uploadthing/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { OurFileRouter } from "app/(admin)/api/uploadthing/core";

import { FormTextInput } from "common/FormInputs";
import { Button } from "common/UI";

import { update_gallery } from "actions/home";

type ImageItem = { image: string; id?: string; galleryId?: string };

type GalleryProps = {
  data: {
    id: string;
    title: string;
    images?: ImageItem[];
  } | null;
};

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
});

type Form = z.infer<typeof formSchema>;

export function GalleryForm({ data }: GalleryProps) {
  const [images, setImages] = useState<ImageItem[]>(data?.images ?? []);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: formSchema.parse({ title: data?.title ?? "Gallery" }),
  });

  async function onSubmit(data: Form) {
    const updatedData = {
      title: data.title,
      images,
    };
    try {
      const res = await update_gallery(updatedData);
      if (res) {
        toast.success("Gallery updated");
      }
    } catch (err) {
      console.error("Error during submission:", err);
      if (err instanceof Error) {
        toast.error(err.message);
      }
    }
  }
  function deleteImage(url: string) {
    setImages((prev) => prev.filter((i) => i.image !== url));
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
              placeholder={"Gallery title"}
              variants={"cms"}
            />
            <div className={"grid grid-cols-4 gap-2"}>
              {images.length > 0 &&
                images.map((i) => (
                  <ImageCard
                    key={i.id || i.image}
                    url={i.image}
                    onDelete={deleteImage}
                  />
                ))}
            </div>
            <UploadDropzone<OurFileRouter, "galleryUploader">
              endpoint={"galleryUploader"}
              onClientUploadComplete={(res) => {
                const files =
                  res?.map((file) => ({
                    image: file.ufsUrl,
                  })) ?? [];
                setImages((prev) => [...prev, ...files]);
              }}
              onUploadError={(error: Error) => {
                console.error(`ERROR! ${error.message}`);
              }}
            />
          </div>
          <Button
            type={"submit"}
            loading={form.formState.isSubmitting}
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
