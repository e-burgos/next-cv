'use client';
import React from 'react';
import { useContent } from '../../../../store/useContent';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Resume from '..';
import { useLanguage } from '@/app/store/useLanguage';

const PdfButtonDownload = () => {
  const { content } = useContent();
  const { currentLang } = useLanguage();
  return (
    <PDFDownloadLink
      document={<Resume content={content} />}
      fileName={`esteban-burgos-${
        currentLang === 'en' ? 'english-version' : 'spanish-version'
      }.pdf`}
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
