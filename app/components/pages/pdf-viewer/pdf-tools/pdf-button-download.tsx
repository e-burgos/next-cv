'use client';
import React from 'react';
import { useContent } from '../../../../store/useContent';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Resume from '..';

const PdfButtonDownload = () => {
  const { content } = useContent();
  return (
    <PDFDownloadLink
      document={<Resume content={content} />}
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
