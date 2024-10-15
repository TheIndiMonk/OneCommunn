import styles from './faq.module.css';
import { Hero } from '../../components/Hero/Hero';
import { Questionnaire } from '../../components/Questioner/Questionnaire';
import { ImageCard } from '../../components/Card/ImageCard/ImageCard';



export const FAQ: React.FC = () => {
    const illustrations = [
        {
            src: '/logo/left.svg',
            alt: 'Leaf Illustration 1',
            className: 'illustration1'
        },
        {
            src: '/logo/right.svg',
            alt: 'Leaf Illustration 2',
            className: 'illustration2'
        },
    ];

    const FaqData = [
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore.',
            answerTitle: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
            answerContent1: "So how did the classical Latin become so incoherent? According to McClintock It's difficult to find examples of lorem ipsum in use before Letraset made it popular",
        },
        {
            question: 'Lorem ipsum was purposefully designed to have no meaning.',
            answerTitle: 'Purpose of Lorem Ipsum',
            answerContent1: 'Lorem Ipsum was created to be a placeholder text.',
            answerContent2: 'It helps designers to visualize layout before content is available.',
        },
        {
            question: 'Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur.',
            answerTitle: 'Porttitor Venenatis',
            answerContent1: 'This text demonstrates the structure and flow of placeholder content.',
            answerContent2: 'It helps to check visual alignment and layout responsiveness.',
        },
        {
            question: 'Some claim lorem ipsum threatens to promote design over content while.',
            answerTitle: 'Design vs. Content',
            answerContent1: 'Lorem ipsum critics argue that it prioritizes visual design over meaningful content.',
            answerContent2: 'However, it serves a practical purpose in early development stages.',
        },
    ];

    return (
        <div>
            <Hero
                title="FAQ"
                breadcrumb="Home • Contact Us"
                illustrations={illustrations}
            />
            <Questionnaire
                title='Frequently Asked Questions'
                description="Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisition. Because he will behold, uniess but through concern, and also of those who resist. Now a pure snore disturbed sum."
                question={FaqData}
                backgroundImage={false} // Set to true to show the background image
            />
            <div className={styles.cardContainer}>
                <ImageCard 
                    src='./Photos/yoga-image.jpeg'
                    alt='Yoga Pose'
                    width='500px' 
                    height='350px'
                />
               <ImageCard 
                    src='./Photos/yoga-image.jpeg'
                    alt='Yoga Pose'
                    width='500px' 
                    height='350px'
                />
            </div>

            <Questionnaire
                title='Yoga Instructor Questions'
                description="Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisition. Because he will behold, uniess but through concern, and also of those who resist. Now a pure snore disturbed sum."
                question={FaqData}
                backgroundImage={false} // Set to true to show the background image
            />
        </div>
    );
};

