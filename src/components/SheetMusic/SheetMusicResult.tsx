import { SheetsList } from "./SheetsList";

import { prismaDB } from "lib/db";

type SheetMusicProps = {
  searchParams: {
    [key: string]: string | undefined;
  };
};

export async function SheetMusicResult({ searchParams }: SheetMusicProps) {
  const { q, ordering, level, genre, griff, view } = searchParams;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = {};

  if (q) {
    where.OR = [
      { title: { contains: q, mode: "insensitive" } },
      { author: { contains: q, mode: "insensitive" } },
    ];
  }

  if (level) {
    where.level = { in: level.split("_") };
  }

  if (genre) {
    where.genre = { in: genre.split("_") };
  }

  if (griff) {
    where.griffType = { in: griff.split("_") };
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const orderBy: any = {};

  if (ordering) {
    if (ordering.startsWith("-")) {
      orderBy[ordering.slice(1)] = "desc";
    } else {
      orderBy[ordering] = "asc";
    }
  }

  const sheets = await prismaDB.sheetMusic.findMany({
    where: {
      ...where,
      category: {
        not: "exercises",
      },
    },
    orderBy: Object.keys(orderBy).length ? orderBy : undefined,
  });

  return <SheetsList sheets={sheets} view={view} />;
}
