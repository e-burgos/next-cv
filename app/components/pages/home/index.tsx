'use client';

import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Profile from '../../sections/profile';
import { useContent } from '../../../store/useContent';
import Menu from '../../menu';

const Home = () => {
  const { content } = useContent();
  return (
    <Tabs>
      <Menu currentTab="home" />
      <div className="tab-panel_list">
        <TabPanel className="home">
          <div
            className="container-fluid main-container container-home p-0 g-0"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="color-block d-none d-lg-block"></div>
            <Profile profileContent={content.profile} />
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Home;
