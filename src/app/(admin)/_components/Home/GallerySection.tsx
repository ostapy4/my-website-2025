import { Container, Title } from "common";

import { GalleryForm } from "app/(admin)/_components/Home/GalleryForm";

import { prismaDB } from "lib/db";

export default async function GallerySection() {
  const gallery = await prismaDB.gallery.findFirst({
    include: { images: true },
  });

  return (
    <section>
      <Container>
        <div className={"py-12"}>
          <Title className={"mb-8 text-lime-800"}>Gallery</Title>
          <GalleryForm data={gallery} />
        </div>
      </Container>
    </section>
  );
}
