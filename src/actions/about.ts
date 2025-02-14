"use server";

import { sectionSchema } from "app/(admin)/_components/About/SectionForm";
import { prismaDB } from "lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

type AboutInfo = z.infer<typeof sectionSchema>;

export const create_info_section = async (data: AboutInfo) => {
  if (data.id) {
    throw new Error("Cannot create a section with an existing ID.");
  }
  try {
    const newSection = await prismaDB.section.create({
      data: {
        header: data.header,
        details: {
          create: data.details.map((detail) => ({
            title: detail.title,
            description: detail.description,
            image: detail.image,
          })),
        },
      },
      include: {
        details: true,
      },
    });

    console.log("New section successfully created:", newSection);
    revalidatePath("/cms/admin/about-me")
    return newSection;
  } catch (error) {
    console.error("Error while creating the section:", error);
    throw new Error("Failed to create the section.");
  }
};


export const update_info_section = async (data: AboutInfo) => {
  if (!data.id) {
    throw new Error("Section ID is required for updating.");
  }

  try {
    const updatedSection = await prismaDB.section.update({
      where: { id: data.id },
      data: {
        header: data.header,
        details: {
          deleteMany: {},
          create: data.details.map((detail) => ({
            title: detail.title,
            description: detail.description,
            image: detail.image,
          })),
        },
      },
      include: {
        details: true,
      },
    });

    console.log("Section successfully updated:", updatedSection);
    revalidatePath("/cms/admin/about-me")
    return updatedSection;
  } catch (error) {
    console.error("Error while updating the section:", error);
    throw new Error("Failed to update the section.");
  }
};


export const delete_info_section = async (sectionId: string) => {
  if (!sectionId) {
    throw new Error("Section ID is required for deletion.");
  }

  try {
    const deletedSection = await prismaDB.section.delete({
      where: { id: sectionId },
      include: {
        details: true,
      },
    });

    console.log("Section successfully deleted:", deletedSection);

    revalidatePath("/cms/admin/about-me");

    return deletedSection;
  } catch (error) {
    console.error("Error while deleting the section:", error);
    throw new Error("Failed to delete the section.");
  }
};
