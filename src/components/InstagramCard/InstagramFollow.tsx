// InstagramFollow.tsx
import React from 'react';
import styles from './InstagramFollow.module.css';
import { InstagramFollowProps } from '../../lib/types/type';

const InstagramFollow: React.FC<InstagramFollowProps>= ({cards}) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {cards.map((card) => (
            <div
              key={card.id}
              className={`${styles.card} ${card.isCenterCard ? styles.centerCard : ''}`}
            >
              {card.content}
            </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFollow;
