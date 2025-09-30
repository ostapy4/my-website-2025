"use client";

import Script from "next/script";

type GoogleAnalyticsProps = {
  GA_MEASUREMENT_ID: string;
};

export function GoogleAnalytics({ GA_MEASUREMENT_ID }: GoogleAnalyticsProps) {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      {/* Завантаження gtag.js асинхронно */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy={"afterInteractive"}
      />
      {/* Ініціалізація GA */}
      <Script id={"ga-init"} strategy={"afterInteractive"}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
