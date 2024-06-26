import { IAchievement } from '@/data/about/achievements';
import React from 'react';

interface Props {
  content: IAchievement;
}

const Achievements = ({ content }: Props) => {
  return (
    <div className="row">
      {content?.data?.length > 0 &&
        content.data.map((val, i) => (
          <div className="col-6" key={i}>
            <div className="box-stats with-margin">
              <h3 className="poppins-font position-relative">{val.title}</h3>
              <p className="open-sans-font m-0 position-relative text-uppercase">
                {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Achievements;
