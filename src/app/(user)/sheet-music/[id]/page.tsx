import { notFound } from "next/navigation";

import { SheetDetails } from "components/SheetMusic";

import { prismaDB } from "lib/db";

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
