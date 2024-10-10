import React, { useState } from 'react';
import { Hero } from '../../components/Hero/Hero';
import {FeaturedCard} from '../../components/Card/FeaturedCard/FeaturedCard';
import TherapistGrid from '../../components/Card/TherapistGrid/TherapistGrid';
import styles from './team.module.css';

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

const Team: React.FC = () => {
    const [selectedTherapist, setSelectedTherapist] = useState(therapists[0]);

    const handleSelectTherapist = (therapist: typeof therapists[0]) => {
        setSelectedTherapist(therapist);
    };

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

    return (
        <div>
            <Hero
                title="Team" 
                breadcrumb="Home • Team" 
                illustrations={illustrations} 
            />
            <div className={styles.container}>
                <h1 className={styles.title}>Meet The Therapist</h1>
                <FeaturedCard 
                    name={selectedTherapist.name}
                    role={selectedTherapist.title}
                    description={selectedTherapist.description}
                    image={selectedTherapist.image}
                    socialLinks={selectedTherapist.socialLinks}
                />
                <TherapistGrid Therapist={therapists} onSelectTherapist={handleSelectTherapist} />
            </div>
        </div>
    );
};

export default Team;
