"use server";

import { prismaDB } from "lib/db";

type GalleryInput = {
  title: string;
  images: { image: string }[];
};

export const update_gallery = async (data: GalleryInput) => {
  if (!data.title || !Array.isArray(data.images) || data.images.length === 0) {
    throw new Error("You must provide a title and an array of images.");
  }

  try {
    const existingGallery = await prismaDB.gallery.findFirst({
      include: { images: true },
    });

    if (!existingGallery) {
      const newGallery = await prismaDB.gallery.create({
        data: {
          title: data.title,
          images: {
            create: data.images,
          },
        },
        include: { images: true },
      });

      return newGallery;
    }

    const { id: galleryId } = existingGallery;

    await prismaDB.image.deleteMany({
      where: { galleryId },
    });

    await prismaDB.image.createMany({
      data: data.images.map((img) => ({
        image: img.image,
        galleryId,
      })),
    });

    const updatedGallery = await prismaDB.gallery.update({
      where: { id: galleryId },
      data: { title: data.title },
      include: { images: true },
    });

    return updatedGallery;
  } catch (error) {
    console.error("Error while updating the gallery:", error);
    throw new Error("Failed to update the gallery.");
  }
};

export const upload_main_image = async (image: string) => {
  if (!image || typeof image !== "string") {
    throw new Error("Main image is required and must be a valid string");
  }

  try {
    const existingImage = await prismaDB.mainImage.findFirst();

    if (!existingImage) {
      const newMainImage = await prismaDB.mainImage.create({
        data: { image },
      });

      return newMainImage;
    }

    const updatedMainImage = await prismaDB.mainImage.update({
      where: { id: existingImage.id },
      data: { image },
    });

    return updatedMainImage;
  } catch (error) {
    console.error("Error updating main image:", error);

    if (error instanceof Error) {
      throw new Error(`Main image update failed: ${error.message}`);
    } else {
      throw new Error(
        "An unknown error occurred while updating the main image",
      );
    }
  }
};
