'use client';

import React, { useState } from 'react';
import { IPortfolioData } from '@/data/portfolio';
import { useLanguage } from '@/store/useLanguage';
import FeaturedCard from './featured-card';
import ModalMain from '../portfolio/modal/modal-main';
import styles from './styles/featured-projects.module.css';

interface FeaturedProjectsProps {
  projects: IPortfolioData[];
  title: string;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  title,
}) => {
  const { currentLang } = useLanguage();
  const [getModal, setGetModal] = useState(false);
  const [modalData, setModalData] = useState<IPortfolioData>();

  const handleModal = (modalData: IPortfolioData) => {
    setGetModal(true);
    setModalData(modalData);
  };

  return (
    <>
      <section className={styles.featuredSection} id="featured-projects">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2
                className={styles.sectionTitle}
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {title}
              </h2>
            </div>
          </div>

          {projects.length > 0 ? (
            <div className={styles.projectsGrid}>
              {projects.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  data-aos-duration="800"
                >
                  <FeaturedCard data={item} onClick={() => handleModal(item)} />
                </div>
              ))}
            </div>
          ) : (
            <div className="row">
              <div className="col-12 text-center">
                <p style={{ color: 'white', fontSize: '1.2rem' }}>
                  {currentLang === 'en'
                    ? 'No featured projects found'
                    : 'No se encontraron proyectos destacados'}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      {getModal && (
        <ModalMain modalData={modalData} setGetModal={setGetModal} />
      )}
    </>
  );
};

export default FeaturedProjects;
