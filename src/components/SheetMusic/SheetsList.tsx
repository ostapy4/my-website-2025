import { SheetCard } from "./SheetCard";
import { SheetRow } from "./SheetRow";
import { SheetMusic } from "@prisma/client";

import { cn } from "utils/cn";

type SheetsListProps = {
  sheets: SheetMusic[] | [];
  view?: string | undefined;
};
export function SheetsList({ sheets, view = "grid" }: SheetsListProps) {
  if (!sheets.length)
    return (
      <div
        className={
          "w-full py-8 text-center font-medium italic text-ok_main-600"
        }
      >
        Sheet music not found
      </div>
    );
  return (
    <div
      className={cn({
        "grid w-full grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5":
          view === "grid",
        "flex w-full flex-col gap-y-2": view === "list",
      })}
    >
      {sheets.map((sheet, Idx) =>
        view === "list" ? (
          <SheetRow key={sheet.id} data={sheet} Idx={Idx + 1} />
        ) : (
          <SheetCard key={sheet.id} data={sheet} />
        ),
      )}
    </div>
  );
}
