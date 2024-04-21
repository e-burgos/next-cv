'use client';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const SEO = () => {
  return (
    <>
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Esteban Burgos CV</title>
        <meta
          name="description"
          content="This is my personal data, please contact me if you need more information."
        />
        <meta
          name="viewport"
          content="minimum-scale=1.0, initial-scale=1.0, width=device-width"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <link rel="canonical" href="https://www.estebanburgos.com.ar/" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/icon-57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/icon-60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/icon-72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/icon-76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/icon-114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/icon-120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/icon-144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/icon-152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/icon-180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/icon-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/icon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/icon-96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/icon-16.png"
        />
      </head>
      <GoogleAnalytics gaId="G-2CB2GYWMRQ" />
      <GoogleTagManager gtmId="GT-TQKZXD8G" />
    </>
  );
};

export default SEO;
