'use client';

import '@/styles/index.scss';
import SEO from './components/layout/seo';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SEO />
      <body>{children}</body>
    </html>
  );
}
