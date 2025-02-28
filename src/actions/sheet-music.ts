"use server";

import { prismaDB } from "lib/db";

type SheetsInput = {
  title: string;
  description: string;
  pdfUrl: string;
}

export const upload_sheets = async (data: SheetsInput) => {
  if (!data.title || !data.description || !data.pdfUrl) {
    throw new Error("You must provide a title, description and sheet music URL.");
  }

  try {
    const sheet = await prismaDB.sheetMusic.create({
      data,
    });
    console.log("Sheet music successfully uploaded:", sheet);
    return sheet;
  } catch (error) {
    console.error("Error while uploading sheet music:", error);
    throw new Error("Failed to upload sheet music.");
  }
};
