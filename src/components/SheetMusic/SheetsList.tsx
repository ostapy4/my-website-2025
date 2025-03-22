import { SheetCard } from "./SheetCard";
import { SheetRow } from "./SheetRow";
import { SheetMusic } from "@prisma/client";

import { cn } from "utils/cn";

type SheetsListProps = {
  sheets: SheetMusic[] | [];
  view?: string | undefined;
};
export function SheetsList({ sheets, view = "grid" }: SheetsListProps) {
  return (
    <div
      className={cn({
        "grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5":
          view === "grid",
        "flex flex-col gap-y-2": view === "list",
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
