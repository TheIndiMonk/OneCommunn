// Card.tsx
import React, { ReactNode } from 'react';
import styles from './Card.module.css';
import { CardProps } from '../../lib/types/type';

interface DynamicCardProps extends CardProps {
    children?: ReactNode; // Allows nested custom content
    backgroundColor?: string; // Optional background color for customization
}

export const Card: React.FC<DynamicCardProps> = ({ 
    city, 
    address, 
    phone1, 
    phone2, 
    email, 
    image, 
    alt,
    width = 'auto', 
    height = 'auto', 
    backgroundColor = '#fff', 
    children 
}) => {
    return (
        <div className={styles.card} style={{ width, height, backgroundColor}}>
            <div className={styles.imageContainer}>
                <img src={image} alt={alt} />
            </div>
            <div className={styles.textContainer}>
                {city && <h2>{city}</h2>}
                {address && <p>{address}</p>}
                {phone1 && <p>{phone1}</p>}
                {phone2 && <p>{phone2}</p>}
                {email && <p>{email}</p>}
            </div>
            {children && <div className={styles.childrenContainer}>{children}</div>}
        </div>
    );
};
