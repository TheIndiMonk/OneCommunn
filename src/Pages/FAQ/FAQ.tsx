import styles from './faq.module.css';
import { useEffect, useState } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { FAQItem } from '../../lib/types/FAQ/FAQItem';
import { Questionnaire } from '../../components/Questioner/Questionnaire';
import { ImageCard } from '../../components/Card/ImageCard/ImageCard';

import { fetchFaq } from '../../data/HomePage/faqData';
import { fetchGallery } from '../../data/FAQPage/GalleryData';


export const FAQ: React.FC = () => {


    const [gallery, setGallery] = useState<string[]>([]);
    useEffect(() => {
        const loadGallery = async () => {
            const data = await fetchGallery();
            console.log("Data: ",data)
            setGallery(data);
        };
        loadGallery();
    }, [])


    const [FaqData, setFaqData] = useState<FAQItem[]>([]);
    useEffect(() => {
        const loadFaqData = async ()  => {
            const data = await fetchFaq();
            setFaqData(data);
        };
        loadFaqData();
    }, [])

    return (
        <div>
            <Hero
                title="FAQ"
                backgroundColor="#D4CBC2"
            />
            <Questionnaire
                title="Frequently Asked Questions"
                description="Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisition. Because he will behold, uniess but through concern, and also of those who resist. Now a pure snore disturbed sum."
                question={FaqData}
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
                question={FaqData}
                backgroundImage={false} // Set to true to show the background image
            />
        </div>
    );
};
