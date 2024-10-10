// Card.tsx
import React from 'react';
import styles from './Card.module.css';
import { CardProps } from '../../lib/types/type';



export const Card: React.FC<CardProps> = ({ 
    title, 
    address, 
    phone1, 
    phone2, 
    email, 
    image, 
    width = 'auto', 
    height = 'auto' 
}) => {
    return (
        <div className={styles.card} style={{ width, height, backgroundImage: image ? `url(${image})` : 'none' }}>
            <div className={styles.textContainer}>
                {title && <h2>{title}</h2>}
                {address && <p>{address}</p>}
                {phone1 && <p>{phone1}</p>}
                {phone2 && <p>{phone2}</p>}
                {email && <p>{email}</p>}
            </div>
        </div>
    );
};
