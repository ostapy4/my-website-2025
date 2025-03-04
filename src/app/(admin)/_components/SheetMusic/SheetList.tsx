"use client";

import { SheetCard } from "./SheetCard";
import { UploadSheetForm } from "./UploadSheetForm";
import { SheetMusic } from "@prisma/client";
import { useState } from "react";

import { delete_sheet } from "actions/sheet-music";

type SheetListProps = {
  sheets: SheetMusic[];
};
export function SheetList({ sheets }: SheetListProps) {
  const [activeSheet, setActiveSheet] = useState<SheetMusic | null>(null);
  return (
    <>
      <div
        className={
          "mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:max-w-screen-sm"
        }
      >
        {sheets.map((sheet) => {
          return (
            <SheetCard
              key={sheet.id}
              data={sheet}
              deleteSheet={delete_sheet}
              editSheet={() => setActiveSheet(sheet)}
            />
          );
        })}
      </div>
      <UploadSheetForm
        data={activeSheet}
        resetSheetState={() => setActiveSheet(null)}
      />
    </>
  );
}
