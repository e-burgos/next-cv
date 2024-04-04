'use client';
import React from 'react';
import Print from '.';
import { useContent } from '../../../store/useContent';
import { PDFDownloadLink } from '@react-pdf/renderer';

const PdfButtonDownload = () => {
  const { content } = useContent();
  return (
    <PDFDownloadLink
      document={<Print data={content} />}
      fileName="esteban-burgos.pdf"
      className="button"
    >
      <span className="button-text">
        {content?.about?.personalInfo.btnLabel}
      </span>
      <span className="button-icon fa fa-download"></span>
    </PDFDownloadLink>
  );
};

export default PdfButtonDownload;
