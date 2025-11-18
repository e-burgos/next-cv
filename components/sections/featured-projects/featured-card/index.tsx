'use client';

import React from 'react';
import Image from 'next/image';
import { IPortfolioData } from '@/data/portfolio';
import styles from './featured-card.module.css';

interface FeaturedCardProps {
  data: IPortfolioData;
  onClick?: () => void;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ data, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={data.image}
          alt={data.type}
          width={600}
          height={400}
        />
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <h3 className={styles.title}>{data.type.toUpperCase()}</h3>
            <p className={styles.subtitle}>
              {data.modalDetails[0]?.project || 'View Details'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
