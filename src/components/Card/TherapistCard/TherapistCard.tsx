import React from 'react';
import styles from './TherapistCard.module.css';
import { TherapistCardProps } from '../../../lib/types/type';


const TherapistCard: React.FC<TherapistCardProps> = ({ name, title, image, onClick }) => {
    return (
        <div className={styles.therapistCard} onClick={onClick}>
            <img src={image || "https://placehold.co/300x300"} alt={`Profile of ${name}`} className={styles.therapistImage} />
            <h3 className={styles.therapistName}>{name}</h3>
            <p className={styles.therapistRole}>{title}</p>
        </div>
    );
};

export default TherapistCard;
