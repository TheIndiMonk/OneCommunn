// InstagramFollow.tsx
import React from 'react';
import styles from './InstagramFollow.module.css';

const InstagramFollow: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={`${styles.card} ${styles.centerCard}`}>
          <i className={`fas fa-leaf ${styles.centerCardIcon}`}></i>
          <p>Yoka@Jew</p>
          <p>Follow Us On</p>
          <p>Instagram</p>
        </div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default InstagramFollow;
