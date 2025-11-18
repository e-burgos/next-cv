'use client';

import React from 'react';
import styles from './styles/scroll-indicator.module.css';

interface ScrollIndicatorProps {
  label: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ label }) => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const words = label.split(' ');
  const firstWord = words[0] || '';
  const secondWord = words.slice(1).join(' ') || '';

  return (
    <div className={styles.scrollIndicator} onClick={handleScrollDown}>
      <div className={styles.scrollTextContainer}>
        <div className={styles.scrollText}>{firstWord}</div>
        <div className={styles.scrollIcon}>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
        </div>
        <div className={styles.scrollText}>{secondWord}</div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
