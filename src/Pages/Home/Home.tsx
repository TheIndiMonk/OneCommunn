import React, { useEffect, useState } from 'react';
import styles from './home.module.css';

import { Logos } from '../../components/LogosContainer/Logos';
import { HomeHero } from '../../components/HomeSections/HomeHero/HomeHero';
import { QuestionBox } from '../../components/QuestionBox/QuestionBox';
import { ProductCard } from '../../components/Card/ProductCard/ProductCard';
import { TherapistGrid } from '../../components/Card/TherapistGrid/TherapistGrid';
import { HomeAboutSection } from '../../components/HomeSections/HomeAboutSection/HomeAboutSection';
import { TestimonialSection } from '../../components/TestimonialCarousel/Testimonial';
import { VisionMission } from '../../components/HomeSections/VisionMission/VissionMission';
import { BookYoga } from '../../components/HomeSections/BookYoga/BookYoga';
import { PriceCard } from '../../components/Card/PriceCard/PriceCard';
import { ContactForm } from '../../components/HomeSections/Form/HomeForm';
import { FAQItem } from '../../lib/types/FAQ/FAQItem';
import { useFetch } from '../../Api/apiHandler';
import { Therapist } from '../../lib/types/Therapist/TherapistTypes';
import { PriceCardProps } from '../../lib/types/type';
import { VerticalCarousel } from '../../components/VerticalCarouselProps/VerticalCarousel';
// import { Slide } from '../../lib/types/SliderTypes/SliderTypes';






const Home: React.FC = () => {
    const handleButtonClick = () => {
        alert("Button clicked!");
    };

    const [images, setImages] = useState<string[]>([]); // State to store images
    const BANNER_KEY = 'community-banner'; // Key for localStorage


    const loadBannerFromCacheOrAPI = () => {
        // Check if the banner is already cached
        const cachedBanner = localStorage.getItem(BANNER_KEY);
        if (cachedBanner) {
            setImages([cachedBanner]); // Use cached banner
        } else if (data?.community?.banner) {
            const bannerUrl = data.community.banner;
            localStorage.setItem(BANNER_KEY, bannerUrl); // Cache the banner
            setImages([bannerUrl]); // Update state
        }
    };

    useEffect(() => {
        loadBannerFromCacheOrAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Only on mount

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = useFetch<any>(
        'https://api.onecommunn.com/api/v1/communities/66fe765b7433f90b2c92f315/home'
    );

    useEffect(() => {
        if (data?.community?.banner) {
            const bannerUrl = data.community.banner;
            // Update the images array with the fetched banner
            setImages((prevImages) => [bannerUrl, ...prevImages]);
        }
    }, [data?.community?.banner]);

    const faqData: FAQItem[] = data?.community?.faq || [];
    const services: Therapist[] = data?.community?.services || [];
    const name: string = data?.community?.name;
    const description: string = data?.community?.description;
    const mission: string = data?.community?.mission;
    const vision: string = data?.community?.vision;
    const plans: PriceCardProps[] = data?.community?.plans || [];
    const teams: Therapist[] = data?.community?.teams || [];


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const servicesApiResponse = (services: any[]) =>
        services.map(service => ({
            name: service.title,
            image: service.image,
            description: service.description,
        }));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const planApiResponse = (plans: any[]) =>
        plans.map(plan => ({
            name: plan.name,
            trainingCount: plan.interval,
            duration: plan.duration,
            offerValue: plan.offerValue,
            startDate: plan.startDate,
            endDate: plan.endDate,
            totalPlanValue: plan.totalPlanValue,
            includeTax: plan.summary,
            description: plan.description,

        }));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any    
    const teamsApiResponse = (teams: any[]) =>
        teams.map(team => ({
            name: team.name,
            title: team.designation,
            description: team.description,
            image: team.image,
        }));


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

    const slides = [
        {
            title: "Welcome to Nature 1",
            description: "Embark on your next journey with us. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            contextBtnText: "Explore Now",
            contextBtnLink: "/explore/yoga",
            propertiesBtnText: "VIEW ALL PROPERTIES",
            propertiesBtnLink: "/properties",
            videoTitle: "10 min Yoga For Beginners",
            videoLink: "https://youtube.com/video",
        },
        {
            title: 'Adventure Awaits 2',
            description: 'Embark on your next journey with us. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            contextBtnText: "Explore Now",
            contextBtnLink: "/explore/yoga",
            propertiesBtnText: "VIEW ALL PROPERTIES",
            propertiesBtnLink: "/properties",
            videoTitle: " 10 Mins Yoga For Nature ",
            videoLink: "https://youtube.com/video",
        },
        {
            title: 'Beginers Free Yoga',
            description: 'Embark on your next journey with us. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            contextBtnText: "Explore Now",
            contextBtnLink: "/explore/yoga",
            propertiesBtnText: "VIEW ALL PROPERTIES",
            propertiesBtnLink: "/properties",
            videoTitle: " 10 Mins Yoga For Nature ",
            videoLink: "https://youtube.com/video",
        },
    ];

    // const Services = [
    //     {
    //         name: "Yoga Cloths",
    //         title: "",
    //         description: "Duis aute irure dolor in reprehenderit...",
    //         image: "https://placehold.co/150x150",
    //         socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    //     },
    //     {
    //         name: "Yoga Books",
    //         title: "",
    //         description: "Description for Yogi Madi...",
    //         image: "https://placehold.co/150x150",
    //         socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    //     },
    //     {
    //         name: "Yoga Accessories",
    //         title: "",
    //         description: "Description for Yogi Madi...",
    //         image: "https://placehold.co/150x150",
    //         socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    //     },
    //     {
    //         name: "Yoga Life Style",
    //         title: "",
    //         description: "Description for Yogi Madi...",
    //         image: "https://placehold.co/150x150",
    //         socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    //     },
    // ];


    // const therapists = [
    //     {
    //         name: "Emily Burden",
    //         title: "Yoga Instructor",
    //         description: "Duis aute irure dolor in reprehenderit...",
    //         image: "https://placehold.co/150x150",
    //         socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    //     },
    //     {
    //         name: "Yogi Madi",
    //         title: "Yoga Instructor",
    //         description: "Description for Yogi Madi...",
    //         image: "https://placehold.co/150x150",
    //         socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    //     },
    //     {
    //         name: "Rohit Madi",
    //         title: "Yoga Instructor",
    //         description: "Description for Yogi Madi...",
    //         image: "https://placehold.co/150x150",
    //         socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    //     },
    //     {
    //         name: "Jhon Madi",
    //         title: "Yoga Instructor",
    //         description: "Description for Yogi Madi...",
    //         image: "https://placehold.co/150x150",
    //         socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    //     },
    //     {
    //         name: "Jhon Madi",
    //         title: "Yoga Instructor",
    //         description: "Description for Yogi Madi...",
    //         image: "https://placehold.co/150x150",
    //         socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    //     },
    //     // Add more therapist data here
    // ];



    // const FaqData = [
    //     {
    //         question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore.',
    //         answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    //     },
    //     {
    //         question: 'Lorem ipsum was purposefully designed to have no meaning.',
    //         answer: 'Purpose of Lorem Ipsum',
    //     },
    //     {
    //         question: 'Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur.',
    //         answer: 'This text demonstrates the structure and flow of placeholder content.',
    //     },
    //     {
    //         question: 'Some claim lorem ipsum threatens to promote design over content while.',
    //         answer: 'However, it serves a practical purpose in early development stages.',
    //     },
    // ];

    // const packages = [
    //     {
    //         name: 'The One Month',
    //         trainingCount: 8,
    //         price: 70,
    //         startDate: "2024-10-07T05:30:00.000Z",
    //         endDate: "2024-11-07T05:30:00.000Z",
    //         schedule: 'Tue - Fri : 7:00am to 7:00pm',
    //         trainer: 'Jasmin',
    //         description: 'Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur Excepteur.',
    //         includeTax: 'Include Tax, Total',
    //         getStartedLink: "/beginner-plan", 
    //     },
    //     {
    //         name: 'The One Month',
    //         trainingCount: 12,
    //         price: 120,
    //         startDate: "2024-10-07T05:30:00.000Z",
    //         endDate: "2024-11-07T05:30:00.000Z",
    //         trainer: 'Jasmin',
    //         description: 'Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur Excepteur.',
    //         includeTax: 'Include Tax, Total',
    //         getStartedLink: "/beginner-plan",

    //     },
    //     {
    //         name: 'The One Month',
    //         trainingCount: 18,
    //         price: 160,
    //        startDate: "2024-10-07T05:30:00.000Z",
    //         endDate: "2024-11-07T05:30:00.000Z",
    //         trainer: 'Jasmin',
    //         description: 'Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur Excepteur.',
    //         includeTax: 'Include Tax, Total',
    //         getStartedLink: "/beginner-plan",
    //     },
    // ];

    // const slides: Slide[] = [
    //     {
    //       content: (
    //         <div>
    //           <img src="https://placehold.co/800x400" alt="Placeholder 1" />
    //           <h2>Slide 1</h2>
    //           <p>This is the first slide.</p>
    //         </div>
    //       ),
    //     },
    //     {
    //       content: (
    //         <div>
    //           <img src="https://placehold.co/800x400" alt="Placeholder 2" />
    //           <h2>Slide 2</h2>
    //           <p>This is the second slide.</p>
    //         </div>
    //       ),
    //     },
    //     {
    //       content: (
    //         <div>
    //           <img src="https://placehold.co/800x400" alt="Placeholder 3" />
    //           <h2>Slide 3</h2>
    //           <p>This is the third slide.</p>
    //         </div>
    //       ),
    //     },
    //     {
    //       content: (
    //         <div>
    //           <video width="600" controls>
    //             <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
    //             Your browser does not support the video tag.
    //           </video>
    //           <h2>Slide 4</h2>
    //           <p>This is the fourth slide with a video.</p>
    //         </div>
    //       ),
    //     },
    // ];

    // const images = [
    //     'https://upload-community-files.s3.ap-south-1.amazonaws.com/66fe765b7433f90b2c92f315_banner.webp',
    //     'https://placehold.co/600x600?text=Image+2',
    //     'https://placehold.co/600x600?text=Image+3',
    // ];



    return (

        <div className={styles.homeContainer}>


            {/* Hero Section */}
            <HomeHero
                slides={slides}
                autoSlide={false}
                slideInterval={30000}
                backgroundColor={''}
            />


            <div className={styles.section}>
                <VerticalCarousel
                    images={images}
                    interval={2000}
                    title="Our Latest Collection"
                    subtitle="Discover the beauty of our new arrivals"
                    BtnText='Learn More'
                    BtnLink='/about'
                    showControls={true}
                    autoSlide={false}
                />
            </div>



            {/* Services Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Services</h2>
                <TherapistGrid Therapist={servicesApiResponse(services)} />
            </div>


            {/* About Us  */}
            <HomeAboutSection
                title="About Us"
                name={name}
                description={description}
                video='./video/file_example_MP4_1280_10MG.mp4'
                ButtonUrl='/contact'
                onContactClick={handleButtonClick}
            />


            {/* Mission Vission Section */}
            <VisionMission
                vision={vision}
                mission={mission}
                instructorName="Jasmin"
                yogaType="Yoga Pregnant"
                schedule="Tue - Fri: 7:00am to 7:00pm"
                appointmentLink="/"
                onBookAppointment={handleButtonClick}
            />


            {/* Booking Section */}
            <BookYoga heading={'Book A Yoga'}
                description={'Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
                contactInfo={{
                    phone: '+180 4585 45789',
                    email: 'info@example.com'
                }}
                onEmailSubmit={function (): void {
                    throw new Error('Function not implemented.');
                }} />


            {/* Price Plan Section */}
            <div className={styles.planSection} style={{ background: '#D4CBC2' }}>
                <h2 className={styles.sectionTitle}>Plans</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate eu fugiat nulla pariatur.</p>
                <PriceCard pricingData={planApiResponse(plans)} />
            </div>


            {/* Logo carousel */}
            <Logos Logos={logos} />


            {/* Testimonial Section */}
            <TestimonialSection Testimonials={testimonials} />


            {/* Gallery */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Gallery</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate eu fugiat nulla pariatur.</p>
                <ProductCard products={products} viewAllLink='/shop' />
            </div>


            {/* Contact From */}
            <div className={styles.section}>
                <ContactForm
                    title="Yoga Poses Your Body"
                    subtitle="To Boost Your Productivity"
                    fields={[
                        { name: "name", type: "text", placeholder: "Name", required: true },
                        { name: "phone", type: "tel", placeholder: "Phone No", required: true },
                        { name: "date", type: "date", required: true },
                        { name: "message", type: "textarea", placeholder: "Message", required: false },
                    ]}
                    onSubmit={(data) => console.log("Form Data:", data)}
                />
            </div>


            {/* Meet the Team Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Team</h2>
                <TherapistGrid Therapist={teamsApiResponse(teams)} />
            </div>


            {/* FAQ Section  */}
            <div className={styles.FaqContainer} style={{ backgroundImage: `url('./logo/background-vector.svg')` }} >
                <h2 className={styles.sectionTitle}>Frequently Asking Questions</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate eu fugiat nulla pariatur.</p>
                <QuestionBox questions={faqData} />
            </div>
        </div>
    );
};

export default Home;
