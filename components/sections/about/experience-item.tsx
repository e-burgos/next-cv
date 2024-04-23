import React, { useState } from 'react';
import { IExperienceItem } from '@/data/about/experience';
import styles from './styles/about.module.css';
import { useTheme } from '@/store/useTheme';

interface Props {
  item: IExperienceItem;
}

const ExperienceItem = ({ item }: Props) => {
  const { themeColor } = useTheme();
  const [desc, setDesc] = useState<boolean>(true);
  return (
    <li className="col-lg-6">
      <div className="icon">
        <i className="fa fa-briefcase"></i>
      </div>
      <span className="time open-sans-font text-uppercase">{item.year}</span>
      <div className="mb-2">
        <h5 className="poppins-font text-uppercase">{item.position}</h5>
        <a
          href={item.link}
          target="_blank"
          className={`open-sans-font text-uppercase ${
            themeColor === 'dark'
              ? styles.experienceLink
              : styles.experienceLinkLight
          }`}
        >
          {item.companyName}
        </a>
      </div>
      <p className="open-sans-font mb-3">
        {desc
          ? `${item.details.substring(0, 200)} ${
              item?.details?.length > 200 ? '...' : ''
            }`
          : item.details}
      </p>
      <button
        className={styles.button}
        onClick={() => setDesc(!desc)}
        disabled={item.details.length < 200}
      >
        {`${desc ? item.btn1 : item.btn2}`}
      </button>
    </li>
  );
};

export default ExperienceItem;
