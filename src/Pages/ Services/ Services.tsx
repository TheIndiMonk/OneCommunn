// import React from 'react';
import { useFetch } from '../../Api/apiHandler';
import { Card } from '../../components/Card/Card';
import { TherapistGrid } from '../../components/Card/TherapistGrid/TherapistGrid';
import { Hero } from '../../components/Hero/Hero';
import { Therapist } from '../../lib/types/Therapist/TherapistTypes';
import styles from './services.module.css';



export const Services = () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = useFetch<any>(
        'https://api.onecommunn.com/api/v1/communities/66fe765b7433f90b2c92f315/home'
    );
    const services: Therapist[] = data?.community?.services || [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const servicesApiResponse = (services: any[]) =>
        services.map(service => ({
            name: service.title,
            image: service.image,
            description: service.description,
        }));

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

    return (
        <>
            <Hero title={'Service'} backgroundColor="#D4CBC2" />

            {/* Services Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Services</h2>
                <TherapistGrid Therapist={servicesApiResponse(services)} />
            </div>

            <Card 
                city="New York"
                address="123 Main St"
                phone1="(123) 456-7890"
                image="/path/to/image.jpg"
                width="300px"
                height="400px"
                backgroundColor="#f5f5f5"
            >
                <button onClick={() => alert('Button clicked!')}>Click Me</button>
                <p>Custom text inside the card</p>
            </Card>


        </>
    );
};
