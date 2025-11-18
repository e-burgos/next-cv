'use client';

import React from 'react';
import { TabPanel, Tabs } from 'react-tabs';
import Blog from '../../sections/blog';
import Menu from '../../menu';

const BlogPage = () => {
  return (
    <Tabs>
      <Menu currentTab="blog" />
      <div className="tab-panel_list">
        <TabPanel className="blog">
          <div
            className="title-section text-center text-sm-center "
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h1>
              my <span>blog</span>
            </h1>
            <span className="title-bg">posts</span>
          </div>
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {/*  Articles Starts  */}
            <div className="row pb-50">
              <Blog />
            </div>
            {/* Articles Ends */}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default BlogPage;
