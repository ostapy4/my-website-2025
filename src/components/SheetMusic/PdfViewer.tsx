"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Logo from "resources/logo.svg";

import { Loader } from "common/Loader";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

interface PdfViewerProps {
  url: string;
}

export function PdfViewer({ url }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <div
      className={
        "aspect-[3/4] w-full max-w-64 self-center overflow-hidden rounded-lg bg-white"
      }
    >
      <Document
        file={url}
        imageResourcesPath={Logo}
        className={"!w-full !max-w-64"}
        loading={<Loader />}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            // loading={<Loader />}
            className={
              "!bg-greeen-200 customPage !w-full !max-w-64 !overflow-hidden"
            }
            key={index}
            pageNumber={index + 1}
          />
        ))}
      </Document>
    </div>
  );
}
