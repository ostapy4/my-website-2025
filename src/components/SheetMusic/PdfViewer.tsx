"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// import { Loader } from "common/Loader";

// import "react-pdf/dist/Page/AnnotationLayer.css";
// import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

interface PdfViewerProps {
  url: string;
}

export function PdfViewer({ url }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>();

  return (
    <div
      className={
        "aspect-[3/4] w-full max-w-64 self-center overflow-hidden rounded-lg bg-white"
      }
    >
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        className={"!w-full !max-w-64"}
        // imageResourcesPath={Logo}
        // loading={<Loader />}
        // options={{
        //   cMapUrl: "/cmaps/",
        //   standardFontDataUrl: "/standard_fonts/",
        // }}
      >
        {numPages &&
          Array.from({ length: numPages }).map((_, index) => (
            <Page
              className={
                "customPage !w-full !max-w-64 !overflow-hidden !bg-green-200"
              }
              key={index}
              pageNumber={index + 1}
            />
          ))}
      </Document>
    </div>
  );
}
