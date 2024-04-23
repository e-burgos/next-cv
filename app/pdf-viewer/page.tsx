'use client';
import React from 'react';
import { useContent } from '@/store/useContent';
import dynamic from 'next/dynamic';

export default function Page() {
  const PdfViewerWithNoSSR = dynamic(
    () => import('@/components/pages/pdf-viewer/pdf-tools/pdf-viewer'),
    {
      ssr: false,
    }
  );
  const { content } = useContent();
  return <PdfViewerWithNoSSR />;
}
