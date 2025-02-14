import { type FileRouter, createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  mainImage: f({
    image: {
      maxFileSize: "8MB",
      maxFileCount: 1,
    },
  }).onUploadComplete(async () => {}),
  galleryUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 5,
    },
  }).onUploadComplete(async () => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
