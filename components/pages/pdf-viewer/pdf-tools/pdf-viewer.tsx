'use client';
import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Resume from '..';
import { useContent } from '../../../../store/useContent';

const PdfViewer = () => {
  const { content } = useContent();
  return (
    <PDFViewer
      showToolbar
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <Resume content={content} />
    </PDFViewer>
  );
};

export default PdfViewer;
