import styles from './faq.module.css';
import { useEffect, useState } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { FAQItem } from '../../lib/types/FAQ/FAQItem';
import { Questionnaire } from '../../components/Questioner/Questionnaire';
import { ImageCard } from '../../components/Card/ImageCard/ImageCard';
import { getCache, setCache } from '../../lib/Utils/cacheUtils';


export const FAQ: React.FC = () => {
    const [faqData, setFaqData] = useState<FAQItem[]>([]);
    const [gallery, setGallery] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFAQData = async () => {
            const API_URL = 'https://api-uat.onecommunn.com/api/v2.0/builders/community/673811a2262dbf8ab84ff643';

            const cachedData = getCache('faqData');
            if (cachedData) {
                // Use cached data
                setFaqData(cachedData.faq || []);
                setGallery(cachedData.gallery || []);
                setLoading(false);
            } else {
                // Fetch fresh data from API
                try {
                    const response = await fetch(API_URL);
                    const result = await response.json();
                    const data = result?.data;

                    if (data) {
                        setFaqData(data.faq || []);
                        setGallery(data.gallery || []);
                        setCache('faqData', { faq: data.faq, gallery: data.gallery });
                    }
                } catch (err) {
                    setError('Failed to load FAQ data.');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchFAQData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <Hero
                title="FAQ"
                backgroundColor="#D4CBC2"
            />
            <Questionnaire
                title="Frequently Asked Questions"
                description="Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisition. Because he will behold, uniess but through concern, and also of those who resist. Now a pure snore disturbed sum."
                question={faqData}
                backgroundImage={false} // Set to true to show the background image
            />
            <div className={styles.cardContainer}>
                {gallery.map((image, index) => (
                    <ImageCard
                        key={index}
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        width="500px"
                        height="350px"
                    />
                ))}
            </div>
            <Questionnaire
                title="Yoga Instructor Questions"
                description="Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisition. Because he will behold, uniess but through concern, and also of those who resist. Now a pure snore disturbed sum."
                question={faqData}
                backgroundImage={false} // Set to true to show the background image
            />
        </div>
    );
};
