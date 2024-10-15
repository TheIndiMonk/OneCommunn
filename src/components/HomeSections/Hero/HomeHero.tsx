// HomeHero.tsx
import React from 'react';
import styles from './HomeHero.module.css';

type HomeHeroProps = {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  videoTitle: string;
  pageIndex: number;
};

const HomeHero: React.FC<HomeHeroProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  videoTitle,
  pageIndex,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={`${styles.dot} ${styles.green}`}></div>
        <div className={`${styles.dot} ${styles.black}`}></div>
        <div className={styles.arrow}>→</div>
      </div>

      <div className={styles.content}>
        <p>{description}</p>
        <h1>{title}</h1>
        <button className={styles.btn} onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>

      <div className={styles.art}>
        <div className={`${styles.circle} ${styles.green}`}></div>
        <div className={`${styles.leaf} ${styles.brown}`}></div>
        <div className={`${styles.oval} ${styles.green}`}></div>
        <div className={styles.sun}>
          <span>{videoTitle}</span>
        </div>
        <div className={styles.pagination}>
          <div className={styles.line}></div>
          <div className={styles.pager}>{pageIndex < 10 ? `0${pageIndex}` : pageIndex}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
