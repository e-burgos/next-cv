'use client';

import React from 'react';
import { TabPanel, Tabs } from 'react-tabs';
import Address from '../../sections/contact/address';
import Social from '../../sections/contact/social';
import Contact from '../../sections/contact';
import { useContent } from '../../../store/useContent';
import Menu from '../../menu';

const ContactPage = () => {
  const { content } = useContent();
  return (
    <Tabs>
      <Menu currentTab="contact" />
      <div className="tab-panel_list">
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
                  discussing new projects, creative ideas or opportunities to be
                  part of your visions.
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
      </div>
    </Tabs>
  );
};

export default ContactPage;
