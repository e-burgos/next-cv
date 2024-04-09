import { IEducationItem } from '@/data/about/education';
import React, { useState } from 'react';
import styles from './styles/about.module.css';
import { useTheme } from '@/app/store/useTheme';

interface Props {
  item: IEducationItem;
}

const EducationItem = ({ item }: Props) => {
  const { themeColor } = useTheme();
  const [desc, setDesc] = useState<boolean>(true);

  return (
    <li className="col-lg-6">
      <div className="icon">
        <i className="fa fa-briefcase"></i>
      </div>
      <span className="time open-sans-font text-uppercase">{`${item.institute} - ${item.year}`}</span>
      <div className="mb-2">
        <h5 className="poppins-font text-uppercase">{item.degree}</h5>
        <div className={styles.row}>
          <a
            href={item?.infoLink}
            target="_blank"
            className={`open-sans-font text-uppercase ${
              themeColor === 'dark'
                ? styles.experienceLink
                : styles.experienceLinkLight
            }`}
          >
            {item?.infoLabel}
          </a>
          {item?.certificateLink && (
            <span
              className={`open-sans-font text-uppercase ${
                themeColor === 'dark'
                  ? styles.experienceLink
                  : styles.experienceLinkLight
              }`}
            >
              •
            </span>
          )}
          <a
            href={item?.certificateLink}
            target="_blank"
            className={`open-sans-font text-uppercase ${
              themeColor === 'dark'
                ? styles.experienceLink
                : styles.experienceLinkLight
            }`}
          >
            {item?.certificateLabel}
          </a>
        </div>
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

export default EducationItem;
