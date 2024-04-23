import { IPortfolioData } from '@/data/portfolio';
import React from 'react';
import Image from 'next/image';
import styles from './card.module.scss';
import { useLanguage } from '@/store/useLanguage';

interface CardProps {
  data: IPortfolioData;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ data, onClick }) => {
  return (
    <div onClick={onClick} className={styles.card}>
      <div className={styles.main}>
        <Image className={styles.tokenImage} src={data.image} alt={data.type} />
        <h5 className="text-center pt-3 text-white">
          <span>{data?.type?.toLocaleUpperCase()}</span>
        </h5>
      </div>
    </div>
  );
};

export default Card;
