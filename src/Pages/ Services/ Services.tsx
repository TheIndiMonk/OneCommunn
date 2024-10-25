// import React from 'react';
import TherapistGrid from '../../components/Card/TherapistGrid/TherapistGrid';
import { Hero } from '../../components/Hero/Hero';
import styles from './services.module.css';



export const Services = () => {




    
    // const illustrations = [
    //     {
    //         src: '/logo/left.svg',
    //         alt: 'Leaf Illustration 1',
    //         className: 'illustration1'
    //     },
    //     {
    //         src: '/logo/right.svg',
    //         alt: 'Leaf Illustration 2',
    //         className: 'illustration2'

    //     },
    // ];


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

    return (
        <>
            <Hero title={'Service'} backgroundColor="#D4CBC2" />

              {/* Services Section */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Services</h2>
                <TherapistGrid Therapist={Services} />
            </div>

        </>
    );
};
