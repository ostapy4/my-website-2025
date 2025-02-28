import { UploadSheetForm } from "./UploadSheetForm";
import { Container, Title } from "common";

export default function SheetMusicSection() {
  return (
    <section>
      <Container>
        <div className={"py-12"}>
          <Title className={"mb-8 text-lime-800"}>Sheet Music Form</Title>
          <UploadSheetForm />
        </div>
      </Container>
    </section>
  );
}
