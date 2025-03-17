import { SheetCard } from "./SheetCard";

import { prismaDB } from "lib/db";

type SheetMusicProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export async function SheetMusicResult({ searchParams }: SheetMusicProps) {
  const { title, author, ordering, category, griff, minPrice, maxPrice } =
    searchParams as { [key: string]: string };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = {};

  if (title) {
    where.title = { contains: title, mode: "insensitive" };
  }

  if (author) {
    where.author = { contains: author, mode: "insensitive" };
  }

  if (category) {
    where.category = category;
  }

  if (griff) {
    where.griffType = griff;
  }

  if (minPrice) {
    where.price = { ...where.price, gte: parseFloat(minPrice) };
  }

  if (maxPrice) {
    where.price = { ...where.price, lte: parseFloat(maxPrice) };
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
  console.log({ where, orderBy });

  const sheets = await prismaDB.sheetMusic.findMany({
    where,
    orderBy: Object.keys(orderBy).length ? orderBy : undefined,
  });

  prismaDB.sheetMusic.findMany({
    orderBy,
  });

  return (
    <div
      // initial={"hidden"}
      // whileInView={"visible"}
      // transition={{
      //   staggerChildren: 0.3,
      // }}
      // viewport={{ once: true }}
      className={
        "grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      }
    >
      {sheets?.map((sheet) => (
        <div
          // variants={{
          //   hidden: {
          //     opacity: 0,
          //     y: 20,
          //   },
          //   visible: {
          //     opacity: 1,
          //     y: 0,
          //   },
          // }}
          // transition={{
          //   duration: 0.8,
          //   ease: "easeInOut",
          // }}
          key={sheet.id}
          className={"flex h-full flex-col items-center"}
        >
          <SheetCard data={sheet} />
        </div>
      ))}
    </div>
  );
}
