import { Container, MotionDiv, Title } from "common";
import { Suspense } from "react";

import { Loader } from "common/Loader";
import { SheetMusicResult } from "components/SheetMusic";
import { Filters } from "components/SheetMusic/Filters";
import { SearchHeadPanel } from "components/SheetMusic/SearchHeadPanel";

export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export default async function PiecesPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;

  console.log({ searchParams });

  return (
    <section>
      <Container>
        <div className={"mb-16 py-8"}>
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Title
              size={"6xl"}
              className={"mb-12 text-center text-ok_main-700"}
            >
              Pieces
            </Title>
          </MotionDiv>
          <div className={"flex gap-x-3"}>
            <Filters />
            <div className={"flex-1"}>
              <SearchHeadPanel />
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
