import { notFound } from "next/navigation";

import { SheetDetails } from "components/SheetMusic";

import { prismaDB } from "lib/db";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await prismaDB.sheetMusic.findUnique({ where: { id } });

  return {
    title: `${data?.title} – Sheet Music by Ostap Konashuk`,
    description: data?.description,
    keywords: [
      "accordion sheet music",
      data?.title,
      "custom music arrangements",
      "Ostap Konashuk",
    ],
  };
}

export default async function SingleSheetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sheet = await prismaDB.sheetMusic.findUnique({ where: { id } });

  if (!sheet) {
    notFound();
  }

  return <SheetDetails data={sheet} />;
}
