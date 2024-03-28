import { IPersonalInfo } from '@/data/about/personal';
import React from 'react';

interface Props {
  content: IPersonalInfo;
}

const PersonalInfo = ({ content }: Props) => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {content?.data?.length > 0 &&
        content.data.map((item, i) => (
          <li key={i}>
            <span className="title">{item.meta}: </span>
            <span
              className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${item.hasColor}`}
            >
              {item.metaInfo}
            </span>
          </li>
        ))}
    </ul>
  );
};

export default PersonalInfo;
