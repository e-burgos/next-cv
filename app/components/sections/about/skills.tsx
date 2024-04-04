import React from 'react';
import styles from './styles/about.module.css';
import Image from 'next/image';
import { ISkill } from '@/data/about/skills';

interface Props {
  content: ISkill;
}

const Skills = ({ content }: Props) => {
  return (
    <div data-aos="fade-down" data-aos-duration="1200" className="row mt-2">
      <hr className="separator mt-1" />
      <div className="col-12">
        <h3 className="text-uppercase text-center pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600">
          {content.subtitle}
        </h3>
      </div>
      {content?.data?.length > 0 &&
        content.data.map((item, i) => (
          <div className={`col-6 col-md-3 mb-3 mb-sm-5`} key={i}>
            <div className={`${styles.skillContainer} c100 ${item.skillClass}`}>
              <div className={styles.image}>
                <Image
                  src={item?.image || ''}
                  alt={item.skillName}
                  width={70}
                  height={70}
                />
              </div>
              <span>{item.skillPercent}%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
              <a href={item.link} className={styles.link} target="_blank">
                {item.skillName}
              </a>
              <p className={styles.frecuency}>{item.frecuency}</p>
            </h6>
          </div>
        ))}
    </div>
  );
};

export default Skills;
