'use client';

import React from 'react';
import { useContent } from '../store/useContent';

const Social = () => {
  const { content } = useContent();
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {content.social.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
