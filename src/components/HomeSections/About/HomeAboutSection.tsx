
// AboutSection.tsx
import React from 'react';
import styles from './HomeAboutSection.module.css';
import { HomeAboutSectionProps } from '../../../lib/types/type'

const HomeAboutSection: React.FC<HomeAboutSectionProps> = ({
  title,
  name,
  description,
  onContactClick
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.description}>{description}</p>
          <button className={styles.contactButton} onClick={onContactClick}>
            Contact Now
          </button>
        </div>
        <div className={styles.right}>
          <div className={styles.circle}></div>
          <img
            src="./logo/sun.svg"
            alt="Sun illustration"
            className={styles.sunImage}
          />
          <img
            src="./logo/leaf.svg"
            alt="Leaf illustration"
            className={styles.leafImage}
          />
          <div className={styles.playButton}>
            <i className="fas fa-play"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
