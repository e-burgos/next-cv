import React from 'react';
import Achievements from './achievements';
import Education from './education';
import Experience from './experience';
import PersonalInfo from './personal-info';
import Skills from './skills';
import ImgMobile from '@/public/assets/img/hero/profile-mobile.jpeg';
import Image from 'next/image';
import { IAbout } from '@/data/about';

interface Props {
  content: IAbout;
}

const AboutMe = ({ content }: Props) => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}

          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  {content?.personalInfo.title || ''}
                </h3>
              </div>
              {/* End .col */}

              <div className="col-12 d-block d-sm-none">
                <Image
                  src={ImgMobile}
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>
              {/* image for mobile menu */}

              <div className="col-12">
                <PersonalInfo content={content?.personalInfo} />
              </div>
              {/* End personal info */}

              <div className="col-12 mt-1">
                <a className="button" href={'/pdf-viewer'} target="_blank">
                  <span className="button-text">
                    {content?.personalInfo.btnLabel}
                  </span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements content={content?.achievements} />
          </div>
          {/* Achievements Ends */}
        </div>
        {/* End .row */}

        <hr className="separator" />

        {/* Skills Starts */}
        <div data-aos="fade-up" data-aos-duration="1200">
          <div className="title-section text-center text-sm-center">
            <h1>
              <span>{content.skills.title}</span>
            </h1>
            <span className="title-bg">{content.skills.title}</span>
          </div>
          {/* End title */}
        </div>

        {/* Skills Starts */}
        <Skills content={content?.skills} />
        <Skills content={content?.skillsDB} />
        <Skills content={content?.skillsCollaborativeTools} />
        <Skills content={content?.skillsDesignTools} />
        <Skills content={content?.skillsBlockchain} />
        {/* Skills Ends */}

        <hr className="separator mt-1" />

        {/* Experience Starts */}
        <div data-aos="fade-up" data-aos-duration="1200">
          <div className="title-section text-center text-sm-center">
            <h1>
              <span>{content.experience.title}</span>
            </h1>
            <span className="title-bg">{content.experience.subtitle}</span>
          </div>
          {/* End title */}
        </div>
        <div className="row pb-5">
          <div className="col-lg-12 m-15px-tb">
            <div className="resume-box">
              <Experience content={content?.experience} />
            </div>
          </div>
        </div>
        {/*  Experience Ends */}

        <hr className="separator mt-1" />

        {/* Education Starts */}
        <div data-aos="fade-up" data-aos-duration="1200">
          <div className="title-section text-center text-sm-center">
            <h1>
              <span>{content.education.title}</span>
            </h1>
            <span className="title-bg">{content.education?.subtitle}</span>
          </div>
          {/* End title */}
        </div>
        <div className="row  pb-5">
          <div className="col-lg-12 m-15px-tb">
            <div className="resume-box">
              <Education content={content?.education} />
            </div>
          </div>
        </div>
        {/* Education Ends */}
      </div>
    </section>
  );
};

export default AboutMe;
