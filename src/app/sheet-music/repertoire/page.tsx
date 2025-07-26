import { Container, Motion, Title } from "common";
import { Metadata } from "next";
import { Suspense } from "react";

import { Loader } from "common/Loader";
import { SheetMusicResult } from "components/SheetMusic";
import { Filters } from "components/SheetMusic/Filters";
import { SearchHeadPanel } from "components/SheetMusic/SearchHeadPanel";

export const metadata: Metadata = {
  title: "Repertoire",
  description:
    "Explore a collection of accordion pieces arranged by Ostap Konashuk. Beautiful solo works and custom arrangements for all skill levels. Sheet music available for download.",
  keywords: [
    "accordion sheet music",
    "accordion solo pieces",
    "accordion arrangements",
    "accordion music downloads",
    "custom accordion music",
    "accordion pieces PDF",
    "sheet music for accordionists",
    "classical accordion pieces",
    "accordion repertoire",
    "Ostap Konashuk arrangements",
  ],
};

export type SearchParams = Promise<{
  [key: string]: string | undefined;
}>;

export default async function PiecesPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;

  return (
    <section>
      <Container>
        <div className={"mb-16 py-8"}>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Title
              size={"6xl"}
              className={"mb-8 text-center text-ok_main-700 md:mb-12"}
            >
              Repertoire
            </Title>
          </Motion>
          <div className={""}>
            <SearchHeadPanel />
            <div className={"flex items-start gap-x-3"}>
              <Filters />
              <Suspense fallback={<Loader />}>
                <SheetMusicResult searchParams={searchParams} />
              </Suspense>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
