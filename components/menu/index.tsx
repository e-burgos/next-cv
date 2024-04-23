'use client';

import React, { FC } from 'react';
import { Tab, TabList } from 'react-tabs';
import { useContent } from '../../store/useContent';
import { useRouter } from 'next/navigation';
import MenuPdfButtonDownload from '../pages/pdf-viewer/pdf-tools/menu-pdf-button-download';

interface MenuProps {
  currentTab: string;
}

const Menu: FC<MenuProps> = ({ currentTab }) => {
  const router = useRouter();
  const { content } = useContent();
  return (
    <div className="header">
      <TabList className="icon-menu revealator-slideup revealator-once revealator-delay1">
        {content.menu.map((item, i) => (
          <>
            {item.tabIndex === 'download' ? (
              <MenuPdfButtonDownload />
            ) : (
              <Tab
                className={`icon-box ${
                  currentTab === item.tabIndex
                    ? 'react-tabs__tab--selected'
                    : ''
                }`}
                key={i}
                tabIndex={item.tabIndex}
                onClick={() => router.push(item.url)}
              >
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            )}
          </>
        ))}
      </TabList>
    </div>
  );
};

export default Menu;
