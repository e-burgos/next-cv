import { IEducation } from '@/data/about/education';
import React from 'react';
import EducationItem from './education-item';

interface Props {
  content: IEducation;
}

const Education = ({ content }: Props) => {
  return (
    <ul style={{ flexWrap: 'wrap', display: 'flex' }}>
      {content?.data?.length > 0 &&
        content.data.map((item, i) => <EducationItem key={i} item={item} />)}
    </ul>
  );
};

export default Education;
