import { SheetsList } from "./SheetsList";

import { prismaDB } from "lib/db";

type SheetMusicProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export async function SheetMusicResult({ searchParams }: SheetMusicProps) {
  const { q, ordering, level, genre, griff, view } = searchParams as {
    [key: string]: string;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = {};

  if (q) {
    where.OR = [
      { title: { contains: q, mode: "insensitive" } },
      { author: { contains: q, mode: "insensitive" } },
    ];
  }

  if (level) {
    const levelsArray = Array.isArray(level) ? level : [level];
    where.level = { in: levelsArray };
  }

  if (genre) {
    const genresArray = Array.isArray(genre) ? genre : [genre];
    where.genre = { in: genresArray };
  }

  if (griff) {
    const griffArray = Array.isArray(griff) ? griff : [griff];
    where.griffType = { in: griffArray };
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
