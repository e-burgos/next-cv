'use client';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Head from 'next/head';

const SEO = () => {
  return (
    <>
      <Head>
        <meta property="" httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Esteban Burgos CV</title>
        <meta property="og:title" content="Esteban Burgos CV" key="title" />
        <meta
          property="og:description"
          name="description"
          content="This is my personal data, please contact me if you need more information."
        />
        <meta
          name="viewport"
          property="og:viewport"
          content="minimum-scale=1.0, initial-scale=1.0, width=device-width"
        />
        <meta
          name="keywords"
          content="resume, developer, software, engineer, react, javascript, typescript, nodejs, frontend, backend, fullstack, web, mobile, app, mobileapp, webapp, portfolio, cv, curriculum, vitae, esteban, burgos, estebanburgos, esteban-burgos, esteban_burgos, esteban-burgos-cv, esteban_burgos_cv, esteban-burgos-resume, esteban_burgos_resume, esteban-burgos-portfolio, esteban_burgos_portfolio, esteban-burgos-cv-resume, esteban_burgos_cv_resume, esteban-burgos-portfolio-cv, esteban_burgos_portfolio_cv, esteban-burgos-portfolio-resume, esteban_burgos_portfolio_resume, esteban-burgos-cv-portfolio, esteban_burgos_cv_portfolio, esteban-burgos-resume-portfolio, esteban_burgos_resume_portfolio"
        />
        <link rel="canonical" href="https://estebanburgos.com.ar" />
        <link rel="canonical" href="https://estebanburgos.com.ar/about-me" />
        <link rel="canonical" href="https://estebanburgos.com.ar/portfolio" />
        <link rel="canonical" href="https://estebanburgos.com.ar/contact" />
        <link rel="canonical" href="https://estebanburgos.com.ar/blog" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/manifest.json" />
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
      </Head>
      <GoogleAnalytics gaId="G-2CB2GYWMRQ" />
      <GoogleTagManager gtmId="GT-TQKZXD8G" />
    </>
  );
};

export default SEO;
