import React from 'react';
import styles from './TherapistCard.module.css';

type TherapistCardProps = {
    name: string;
    title: string;
    onClick: () => void;
};

const TherapistCard: React.FC<TherapistCardProps> = ({ name, title, onClick }) => {
    return (
        <div className={styles.therapistCard} onClick={onClick}>
            <img src="https://placehold.co/300x300" alt={`Profile of ${name}`} className={styles.therapistImage} />
            <h3 className={styles.therapistName}>{name}</h3>
            <p className={styles.therapistRole}>{title}</p>
        </div>
    );
};

export default TherapistCard;
