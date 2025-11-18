'use client';

import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Profile from '../../sections/profile';
import FeaturedProjects from '../../sections/featured-projects';
import ScrollIndicator from '../../ui/scroll-indicator';
import { useContent } from '../../../store/useContent';
import { useLanguage } from '../../../store/useLanguage';
import { PortfolioDataEs, PortfolioDataEn } from '../../../data/portfolio';
import Menu from '../../menu';
import styles from './styles/home.module.css';

const Home = () => {
  const { content } = useContent();
  const { currentLang } = useLanguage();

  const portfolioData =
    currentLang === 'es' ? PortfolioDataEs : PortfolioDataEn;
  let featuredProjects = portfolioData.filter(
    (project) =>
      project.type === 'TUCU UI' || project.type === 'DeFi Token Manager'
  );

  // Fallback: if specific projects not found, get first 2 featured projects
  if (featuredProjects.length === 0) {
    featuredProjects = portfolioData
      .filter(
        (project) =>
          project.tag.includes('Destacados') || project.tag.includes('Featured')
      )
      .slice(0, 2);
  }

  const featuredProjectsTitle =
    currentLang === 'es' ? 'Proyectos Destacados' : 'Featured Projects';
  const scrollLabel =
    currentLang === 'es' ? 'Proyectos destacados' : 'Featured Projects';

  return (
    <Tabs>
      <Menu currentTab="home" />
      <div className="tab-panel_list">
        <TabPanel className={`home ${styles.homeContainer}`}>
          {/* Profile Section - Full Height */}
          <div className={styles.profileSection}>
            <div
              className={`container-fluid main-container container-home p-0 g-0 ${styles.profileContent}`}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Profile profileContent={content.profile} />
            </div>

            {/* Scroll Indicator - Bottom of Profile Section */}
            <div className={styles.scrollSection}>
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-12 text-center">
                    <ScrollIndicator label={scrollLabel} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Projects Section */}
          <FeaturedProjects
            projects={featuredProjects}
            title={featuredProjectsTitle}
          />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Home;
