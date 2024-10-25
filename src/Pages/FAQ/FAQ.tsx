import styles from './faq.module.css';
import { useFetch } from '../../Api/apiHandler';
import { Hero } from '../../components/Hero/Hero';
import { FAQItem } from '../../lib/types/FAQ/FAQItem';
import { Questionnaire } from '../../components/Questioner/Questionnaire';
import { ImageCard } from '../../components/Card/ImageCard/ImageCard';


export const FAQ: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data, loading, error } = useFetch<any>(
        'https://api.onecommunn.com/api/v1/communities/66fe765b7433f90b2c92f315/home'
    );
    const faqData: FAQItem[] = data?.community?.faq || [];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <Hero
                title="FAQ"
                backgroundColor="#D4CBC2"
            />
            <Questionnaire
                title='Frequently Asked Questions'
                description="Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisition. Because he will behold, uniess but through concern, and also of those who resist. Now a pure snore disturbed sum."
                question={faqData}
                backgroundImage={false} // Set to true to show the background image
            />
            <div className={styles.cardContainer}>
                <ImageCard 
                    src={data?.community?.gallery[0]}       
                    alt='Yoga Pose'
                    width='500px' 
                    height='350px'
                />
               <ImageCard 
                    src={data?.community?.gallery[1]}
                    alt='Yoga Pose'
                    width='500px' 
                    height='350px'
                />
            </div>

            <Questionnaire
                title='Yoga Instructor Questions'
                description="Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisition. Because he will behold, uniess but through concern, and also of those who resist. Now a pure snore disturbed sum."
                question={faqData}
                backgroundImage={false} // Set to true to show the background image
            />
        </div>
    );
};

