import React from 'react';
import styles from './faq.module.css';


const FAQ: React.FC = () => {
    return (
        <div>
            <section className={styles.heroSection}>
                <h1 className={styles.heroTitle}>FAQ</h1>
                <p className={styles.breadcrumb}>Home • FAQ</p>
                <div className={styles.illustrationContainer}>
                    <img
                        src="/logo/left.svg"
                        alt="Leaf Illustration 1"
                        className={styles.illustration1}
                    />
                    <img
                        src="/logo/right.svg"
                        alt="Leaf Illustration 2"
                        className={styles.illustration2}
                    />
                </div>

            </section>

            <section className={styles.contentSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Elise Burtan</h2>
                </div>
                <div className={styles.grid}>
                    <InfoBox
                        title="Stress Relief"
                        description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
                        iconUrl="https://placehold.co/50x50"
                    />
                    <InfoBox
                        title="Calm Mind"
                        description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
                        iconUrl="https://placehold.co/50x50"
                    />
                    <InfoBox
                        title="Life Style"
                        description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
                        iconUrl="https://placehold.co/50x50"
                    />
                    <InfoBox
                        title="Healthy Body"
                        description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
                        iconUrl="https://placehold.co/50x50"
                    />
                </div>
                <div className={styles.ctaContainer}>
                    <div className={styles.ctaCircle}>
                        <button className={styles.playButton}>
                            <i className="fas fa-play"></i>
                        </button>
                    </div>
                    <img src="https://placehold.co/100x100" alt="Decorative Leaves" className={styles.leafImage} />
                </div>
            </section>
        </div>
    );
};

type InfoBoxProps = {
    title: string;
    description: string;
    iconUrl: string;
};

const InfoBox: React.FC<InfoBoxProps> = ({ title, description, iconUrl }) => {
    return (
        <div className={styles.infoBox}>
            <img src={iconUrl} alt={`${title} Icon`} className={styles.icon} />
            <div>
                <h3 className={styles.infoTitle}>{title}</h3>
                <p className={styles.infoDescription}>{description}</p>
            </div>
        </div>
    );
};

export default FAQ;
