// import React from 'react';
import { useFetch } from '../../Api/apiHandler';
import { Hero } from '../../components/Hero/Hero';
import { TherapistGrid } from '../../components/Card/TherapistGrid/TherapistGrid';
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
    // const therapistCardsData: TherapistCardProps[] = [
    //     {
    //         name: 'Dr. Emily Smith',
    //         title: 'Clinical Psychologist',
    //         image: 'https://placehold.co/300x300',
    //         onClick: () => alert('Dr. Emily Smith clicked!'),
    //     },
    //     {
    //         name: 'Michael Johnson',
    //         title: 'Marriage and Family Therapist',
    //         image: 'https://placehold.co/300x300',
    //         onClick: () => alert('Michael Johnson clicked!'),
    //     },
    //     {
    //         name: 'Sophia Brown',
    //         title: 'Child Psychologist',
    //         image: 'https://placehold.co/300x300',
    //         onClick: () => alert('Sophia Brown clicked!'),
    //     },
    //     {
    //         name: 'Dr. William Lee',
    //         title: 'Behavioral Therapist',
    //         image: 'https://placehold.co/300x300',
    //         onClick: () => alert('Dr. William Lee clicked!'),
    //     },
    //     {
    //         name: 'Anna Martinez',
    //         title: 'Mental Health Counselor',
    //         image: 'https://placehold.co/300x300',
    //         onClick: () => alert('Anna Martinez clicked!'),
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



        </>
    );
};
