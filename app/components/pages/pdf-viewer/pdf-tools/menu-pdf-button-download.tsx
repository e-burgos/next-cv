'use client';
import React from 'react';
import { useContent } from '../../../../store/useContent';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Resume from '..';
import { Tab } from 'react-tabs';
import { useLanguage } from '@/app/store/useLanguage';

const MenuPdfButtonDownload = () => {
  const { content } = useContent();
  const { currentLang } = useLanguage();
  return (
    <PDFDownloadLink
      document={<Resume content={content} />}
      fileName={`esteban-burgos-${
        currentLang === 'en' ? 'english-version' : 'spanish-version'
      }.pdf`}
    >
      <Tab className={`icon-box`} tabIndex={'download'}>
        <i className={`fa fa-download`}></i>
        <h2>{content?.about?.personalInfo.btnLabel}</h2>
      </Tab>
    </PDFDownloadLink>
  );
};

export default MenuPdfButtonDownload;
