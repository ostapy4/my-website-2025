import { Slider } from "./Slider";
import { Container } from "common";

import { prismaDB } from "lib/db";

export async function VideoGallery() {
  const videoUrls = await prismaDB.youtubeVideo.findMany();

  return (
    <section>
      <Container>
        <div className={"py-8"}>
          <Slider data={videoUrls} />
        </div>
      </Container>
    </section>
  );
}
