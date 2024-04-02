'use client';

import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Wrapper from '../components/layout/wrapper';
import SwitchDark from '../components/switch/switch-dark';
import Profile from '../components/profile';
import Portfolio from '../components/portfolio/portfolio';
import Address from '../components/address';
import Social from '../components/social';
import Contact from '../components/contact';
import Blog from '../components/blog';
import AboutMain from '../components/about';
import SwitchLang from '../components/switch/switch-lang';
import { useContent } from '../store/useContent';

const Home = () => {
  const { content } = useContent();
  return (
    <Wrapper>
      <div className="blue">
        <SwitchDark />
        <SwitchLang />
        {/* End Switcher */}
        <Tabs>
          <div className="header">
            <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
              {content.menu.map((item, i) => (
                <Tab className={'icon-box'} key={i}>
                  <i className={`fa ${item.icon}`}></i>
                  <h2>{item.menuName}</h2>
                </Tab>
              ))}
            </TabList>
          </div>
          {/* End Menu Content */}

          <div className="tab-panel_list">
            {/* Profile  Content Starts */}
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
            {/* Profile  Content Ends */}

            {/* About Content Starts */}
            <TabPanel className="about">
              <div data-aos="fade-up" data-aos-duration="1200">
                <div className="title-section text-center text-sm-center">
                  <h1>
                    {content.about.title} <span>{content.about.title2}</span>
                  </h1>
                  <span className="title-bg">{content.about.subtitle}</span>
                </div>
                {/* End title */}
                <AboutMain content={content.about} />
              </div>
            </TabPanel>
            {/* About Content Ends */}

            {/* Portfolio Content Starts */}
            <TabPanel className="portfolio professional">
              <div
                className="title-section text-center text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  {content.portfolio.title}{' '}
                  <span> {content.portfolio.title2}</span>
                </h1>
                <span className="title-bg"> {content.portfolio.subtitle}</span>
              </div>
              {/* End title */}
              <Portfolio data={content.portfolio} />
            </TabPanel>
            {/* Portfolio Content Ends */}

            {/* Contact Content Starts */}
            <TabPanel className="contact">
              <div
                className="title-section text-center text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  get in <span>touch</span>
                </h1>
                <span className="title-bg">contact</span>
              </div>
              <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="row">
                  {/*  Left Side Starts */}
                  <div className="col-12 col-lg-4">
                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                      {"Don't"} be shy !
                    </h3>
                    <p className="open-sans-font mb-4">
                      Feel free to get in touch with me. I am always open to
                      discussing new projects, creative ideas or opportunities
                      to be part of your visions.
                    </p>
                    <Address />
                    {/* End Address */}

                    <Social />
                    {/* End Social */}
                  </div>
                  {/* Left Side Ends */}

                  {/*  Contact Form Starts  */}
                  <div className="col-12 col-lg-8">
                    <Contact />
                  </div>
                  {/*  Contact Form Ends */}
                </div>
              </div>
              {/* End .container */}
            </TabPanel>
            {/* Contact Content Ends */}

            {/* Blog Content Starts */}
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
            {/* Blog Content Ends */}
          </div>
        </Tabs>
      </div>
    </Wrapper>
  );
};

export default Home;
