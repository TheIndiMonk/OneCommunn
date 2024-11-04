// ImageCard.tsx
import React from 'react';
import styles from './ImageCard.module.css';

interface ImageCardProps {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
}

export const ImageCard: React.FC<ImageCardProps> = ({ src, alt, width = '100%', height = 'auto' }) => {
    return (
        <div className={styles.imageCard} style={{ width, height }}>
            <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
    );
};
