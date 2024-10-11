// Banner.tsx
import React from 'react';
import styles from './BannerCard.module.css';
import { Banner } from '../../lib/types/type';


const BannerCard: React.FC<Banner> = ({ title, subtitle, buttonText, description, link }) => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerContent}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.subtitle}>{subtitle}</h2>
                    {link ? (
                        <a href={link} className={styles.button}>
                            {buttonText}
                        </a>
                    ) : (
                        <button className={styles.button}>{buttonText}</button>
                    )}
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.imagePlaceholder}></div>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;
