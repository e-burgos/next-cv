'use client';

import React from 'react';
import { TabPanel, Tabs } from 'react-tabs';
import AboutMain from '../../sections/about';
import { useContent } from '../../../store/useContent';
import Menu from '../../menu';

const AboutMe = () => {
  const { content } = useContent();
  return (
    <Tabs>
      <Menu currentTab="about-me" />
      <div className="tab-panel_list">
        <TabPanel className="about" id="about">
          <div data-aos="fade-up" data-aos-duration="1200">
            <div className="title-section text-center text-sm-center">
              <h1>
                {content.about.title} <span>{content.about.title2}</span>
              </h1>
              <span className="title-bg">{content.about.subtitle}</span>
            </div>
            <AboutMain content={content.about} />
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default AboutMe;
