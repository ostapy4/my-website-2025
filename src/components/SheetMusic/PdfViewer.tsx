"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import { Loader } from "common/Loader";

import { cn } from "utils/cn";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

interface PdfViewerProps {
  url: string;
  classNames?: {
    wrapper?: string;
    document?: string;
    loader?: string;
    page?: string;
  };
}

export function PdfViewer({ url, classNames }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>();

  return (
    <div className={cn(classNames?.wrapper)}>
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        className={cn("!w-full", classNames?.document)}
        // imageResourcesPath={Logo}
        loading={
          <Loader
            className={{
              wrapper: cn(classNames?.loader),
            }}
          />
        }
      >
        {numPages &&
          Array.from({ length: numPages }).map((_, index) => (
            <Page
              className={cn(classNames?.page)}
              key={index}
              pageNumber={index + 1}
              loading={""}
            />
          ))}
      </Document>
    </div>
  );
}
