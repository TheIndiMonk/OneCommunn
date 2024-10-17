import React from 'react';
import styles from './home.module.css';
import { Logos } from '../../components/LogosContainer/Logos';
import HomeHero from '../../components/HomeSections/Hero/HomeHero';
import { QuestionBox } from '../../components/QuestionBox/QuestionBox';
import ProductCard from '../../components/Card/ProductCard/ProductCard';
import TherapistGrid from '../../components/Card/TherapistGrid/TherapistGrid';
import HomeAboutSection from '../../components/HomeSections/About/HomeAboutSection';
import { TestimonialSection } from '../../components/TestimonialCarousel/Testimonial';
import VisionMission from '../../components/HomeSections/VisionMission/VissionMission';
import BookYoga from '../../components/HomeSections/BookYoga/BookYoga';



const Home: React.FC = () => {
    const handleButtonClick = () => {
        alert("Button clicked!");
    };
    const Services = [
        {
            name: "Yoga Cloths",
            title: "",
            description: "Duis aute irure dolor in reprehenderit...",
            image: "https://placehold.co/150x150",
            socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
        },
        {
            name: "Yoga Books",
            title: "",
            description: "Description for Yogi Madi...",
            image: "https://placehold.co/150x150",
            socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
        },
        {
            name: "Yoga Accessories",
            title: "",
            description: "Description for Yogi Madi...",
            image: "https://placehold.co/150x150",
            socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
        },
        {
            name: "Yoga Life Style",
            title: "",
            description: "Description for Yogi Madi...",
            image: "https://placehold.co/150x150",
            socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
        },
    ];

    const slides = [
        {
            title: "Welcome to Nature",
            description: "Experience the beauty of nature.",
            buttonText: "Explore Now",
            buttonLink: "https://example.com",
            videoTitle: "Nature Video",
            videoLink: "https://youtube.com/video",
        },
        {
            title: 'Adventure Awaits',
            description: 'Embark on your next journey with us. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            buttonText: 'Join Us',
            buttonLink: '/',
            videoTitle: "Nature Video",
            videoLink: "https://youtube.com/video",
        },
    ];
      
    const logos = [
        { src: './company-logo/logo1.svg', alt: 'Logo 1' },
        { src: './company-logo/logo2.svg', alt: 'Logo 2' },
        { src: './company-logo/logo3.svg', alt: 'Logo 3' },
        { src: './company-logo/logo4.svg', alt: 'Logo 4' },
        { src: './company-logo/logo5.svg', alt: 'Logo 5' },
        { src: './company-logo/logo6.svg', alt: 'Logo 6' },
        { src: './company-logo/logo7.svg', alt: 'Logo 7' },
        { src: './company-logo/logo8.svg', alt: 'Logo 8' },
        { src: './company-logo/logo9.svg', alt: 'Logo 9' },
        { src: './company-logo/logo10.svg', alt: 'Logo 10' },
        // Add more logos here
    ];

    const testimonials = [
        {
            src: 'https://placehold.co/300x300',
            alt: 'Logo 1',
            text: 'What an experience! From the moment I entered Retreat You I felt in peace. Daily yoga, exercises and great diet really helped me to disconnect.',
            author: 'Rohit Martin',
            role: 'Manager',
        },
        {
            src: 'https://placehold.co/300x300',
            alt: 'Logo 2',
            text: 'What an experience! From the moment I entered Retreat You I felt in peace. Daily yoga, exercises and great diet really helped me to disconnect.',
            author: 'Manish Martin',
            role: 'Manager',
        },
        {
            src: 'https://placehold.co/300x300',
            alt: 'Logo 2',
            text: 'What an experience! From the moment I entered Retreat You I felt in peace. Daily yoga, exercises and great diet really helped me to disconnect.',
            author: 'Jessi Martin',
            role: 'Manager',
        }
    ];

    const therapists = [
        {
            name: "Emily Burden",
            title: "Yoga Instructor",
            description: "Duis aute irure dolor in reprehenderit...",
            image: "https://placehold.co/150x150",
            socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
        },
        {
            name: "Yogi Madi",
            title: "Yoga Instructor",
            description: "Description for Yogi Madi...",
            image: "https://placehold.co/150x150",
            socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
        },
        {
            name: "Rohit Madi",
            title: "Yoga Instructor",
            description: "Description for Yogi Madi...",
            image: "https://placehold.co/150x150",
            socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
        },
        {
            name: "Jhon Madi",
            title: "Yoga Instructor",
            description: "Description for Yogi Madi...",
            image: "https://placehold.co/150x150",
            socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
        },
        {
            name: "Jhon Madi",
            title: "Yoga Instructor",
            description: "Description for Yogi Madi...",
            image: "https://placehold.co/150x150",
            socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
        },
        // Add more therapist data here
    ];

    const products = [
        {
            name: 'Product 1',
            price: '29.99',
            image: 'https://placehold.co/250x300',
            link: '/price'
        },
        {
            name: 'Product 2',
            price: '39.99',
            image: 'https://placehold.co/250x300',
            link: '/price'


        },
        {
            name: 'Product 3',
            price: '29.99',
            image: 'https://placehold.co/250x300',
            link: '/price'

        },
        {
            name: 'Product 4',
            price: '39.99',
            image: 'https://placehold.co/250x300',
            link: '/price'


        }
        // Add more products as needed
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

        <div className={styles.homeContainer}>
            <HomeHero
                slides={slides}
                autoSlide={false}
                slideInterval={30000}
                backgroundColor={''}
            />
            
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Services</h2>
                <TherapistGrid Therapist={Services} />
            </div>

            <HomeAboutSection
                title="About Us"
                name="Elise Burtan"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. "
                video='./video/file_example_MP4_1280_10MG.mp4'
                ButtonUrl='/contact'
                onContactClick={handleButtonClick}
            />
            <VisionMission
                vision="Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore."
                mission="Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt."
                instructorName="Jasmin"
                yogaType="Yoga Pregnant"
                schedule="Tue - Fri: 7:00am to 7:00pm"
                appointmentLink="/"
                onBookAppointment={handleButtonClick}
            />

            <BookYoga heading={'Book A Yoga'} description={'Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur.'} contactInfo={{
                phone: '+180 4585 45789',
                email: 'info@example.com'
            }} onEmailSubmit={function (email: string): void {
                throw new Error('Function not implemented.');
            } } />
            
           

            <Logos Logos={logos} />
           
            <TestimonialSection Testimonials={testimonials} />

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Gallery</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate eu fugiat nulla pariatur.</p>
                <ProductCard products={products} />
            </div>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Team</h2>
                <TherapistGrid Therapist={therapists} />
            </div>
            <div className={styles.FaqContainer}>
                <h2 className={styles.sectionTitle}>Gallery</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate eu fugiat nulla pariatur.</p>

                <QuestionBox questions={FaqData} />
            </div>
        </div>
    );
};

export default Home;
