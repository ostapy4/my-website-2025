import { SheetCard } from "./SheetCard";

import { prismaDB } from "lib/db";

export async function Exercises() {
  const sheets = await prismaDB.sheetMusic.findMany({
    where: { category: "exercises" },
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
