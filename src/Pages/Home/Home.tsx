import styles from './home.module.css';

import React, { useEffect, useState } from 'react';

import { Logos } from '../../components/LogosContainer/Logos';
import { PriceCard } from '../../components/Card/PriceCard/PriceCard';
import { QuestionBox } from '../../components/QuestionBox/QuestionBox';
import { ContactForm } from '../../components/HomeSections/Form/HomeForm'
import { BookYoga } from '../../components/HomeSections/BookYoga/BookYoga';
import { ProductCard } from '../../components/Card/ProductCard/ProductCard';
import { TherapistGrid } from '../../components/Card/TherapistGrid/TherapistGrid';
import { TestimonialSection } from '../../components/TestimonialCarousel/Testimonial';
import { VerticalCarousel } from '../../components/VerticalCarousel/VerticalCarousel';
import { VisionMission } from '../../components/HomeSections/VisionMission/VissionMission';
import { HomeAboutSection } from '../../components/HomeSections/HomeAboutSection/HomeAboutSection';

// Types
import { SlidesBanners } from '../../lib/types/VerticalCarouselProps/SlidesBanners';


// Utility function 
// import { getCache, setCache } from '../../lib/Utils/cacheUtils';

// Sampel Data Import
import { fetchBanners } from '../../data/HomePage/Banners';
import { fetchFaq } from '../../data/HomePage/faqData';
import { fetchServices } from '../../data/HomePage/services';
import { fetchPackages } from '../../data/HomePage/packages';


import { logos } from '../../data/HomePage/logos';
import { products } from '../../data/HomePage/products';
import { testimonials } from '../../data/HomePage/testimonials';
import { fetchTeam } from '../../data/HomePage/therapists';


import { FAQItem } from '../../lib/types/FAQ/FAQItem';
import { Therapist } from '../../lib/types/Therapist/TherapistTypes';
import { PriceCardProp } from '../../lib/types/PriceCard/PriceCard';
import { fetchAboutUs, aboutUsDummyData} from '../../data/HomePage/aboutUs'



const Home: React.FC = () => {
    const handleButtonClick = () => {
        alert("Button clicked!");
    };
    

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [about, setAbout] = useState <any>(aboutUsDummyData)
    useEffect(() => {
        const loadAboutData = async () =>{
            const data = await fetchAboutUs();
            setAbout(data);
        }
        loadAboutData();
    }, [])

    const [banners, setBanners] = useState<SlidesBanners[]>([]);
    useEffect(() => {
      const loadBanners = async () => {
        const data = await fetchBanners();
        
        const modifiedBanners = data.map((banner) => ({
            ...banner,
            BtnText: 'Learn More',  // Add BtnText property
            BtnLink: '/',  // Add BtnLink property
          }));

        setBanners(modifiedBanners);
      };
  
      loadBanners();
    }, []);

    const [FaqData, setFaqData] = useState<FAQItem[]>([]);
    useEffect(() => {
        const loadFaqData = async ()  => {
            const data = await fetchFaq();
            setFaqData(data);
        };
        loadFaqData();
    }, [])

    const [services, setServices] = useState<Therapist[]>([]);
    useEffect(() =>{
        const loadServices = async () => {
            const data = await fetchServices();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const modifiedServices = data.map((services: any) => ({
                ...services, 
                image: services.images[0]
            }));
            setServices(modifiedServices);
        };
        loadServices();
    }, []);

    const [packages, setPackages] = useState<PriceCardProp[]>([]);
    useEffect(() =>{
        const loadPackages = async () => {
            const data = await fetchPackages();
            setPackages(data);
        };
        loadPackages();
    }, []);

    const [therapists, setTherapists] = useState<Therapist[]>([]);
    useEffect(() =>{
        const loadTherapists = async () => {
            const data = await fetchTeam();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const modifiedTeam = data.map((therapists: any) => ({
                ...therapists,
                image: therapists.avatar?.value || ""
              }));
            setTherapists(modifiedTeam);
        };
        loadTherapists();
    }, []);

    
    return (

        <div className={styles.homeContainer}>
            <div className={styles.section}>
                <VerticalCarousel
                    banners={banners}
                    interval={2000}
                    showControls={true}
                    autoSlide={false}
                />
            </div>


            {/* Services Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Services</h2>
                <TherapistGrid Therapist={services} />
            </div>


            {/* About Us  */}
            <HomeAboutSection
                title="About Us"
                name={about.heading}
                description={about.about}
                video='./video/file_example_MP4_1280_10MG.mp4'
                ButtonUrl='/contact'
                onContactClick={handleButtonClick}
            />


            {/* Mission Vission Section */}
            <VisionMission
                vision={about.vision}
                mission={about.mission}
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
                <PriceCard pricingData={packages} />
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
                <TherapistGrid Therapist={therapists} />
            </div>


            {/* FAQ Section  */}
            <div className={styles.FaqContainer} style={{ backgroundImage: `url('./logo/background-vector.svg')` }} >
                <h2 className={styles.sectionTitle}>Frequently Asking Questions</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate eu fugiat nulla pariatur.</p>
                <QuestionBox questions={FaqData} />
            </div>
        </div>
    );
};

export default Home;
