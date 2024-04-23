'use client';

import React from 'react';
import { TabPanel, Tabs } from 'react-tabs';
import Portfolio from '../../sections/portfolio/portfolio';
import { useContent } from '../../../store/useContent';
import Menu from '../../menu';

const PortfolioPage = () => {
  const { content } = useContent();
  return (
    <Tabs>
      <Menu currentTab="portfolio" />
      <div className="tab-panel_list">
        <TabPanel className="portfolio professional">
          <div
            className="title-section text-center text-sm-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h1>
              {content.portfolio.title} <span> {content.portfolio.title2}</span>
            </h1>
            <span className="title-bg"> {content.portfolio.subtitle}</span>
          </div>
          <Portfolio data={content.portfolio} />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default PortfolioPage;
