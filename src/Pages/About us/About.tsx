import React, { useEffect, useState } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { Logos } from '../../components/LogosContainer/Logos';
import { AboutSection } from '../../components/AboutSection/AboutSection';
import { TherapistGrid } from '../../components/Card/TherapistGrid/TherapistGrid';
import { TestimonialSection } from '../../components/TestimonialCarousel/Testimonial';
import { CheckSchedule } from '../../components/CheckSchedule/CheckSchedule';

import { Therapist } from '../../lib/types/Therapist/TherapistTypes';
import { fetchTeam } from '../../data/HomePage/therapists';

// import styles from './about.module.css';

const About: React.FC = () => {

    // Team API Call.
    const [teams, setTeams] = useState<Therapist[]>([]);
    useEffect(() =>{
        const loadTherapists = async () => {
            const data = await fetchTeam();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const modifiedTeam = data.map((teams: any) => ({
                ...teams,
                image: teams.avatar?.value || ""
              }));
              setTeams(modifiedTeam);
        };
        loadTherapists();
    }, []);


    const aboutSectionData = {
        heading: "Elise Burten",
        subHeading: "About Us",
        features: [
            {
                icon: './logo/stress-relife.svg', // Replace with actual path
                title: 'Stress Relief',
                description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            },
            {
                icon: './logo/calm-mind.svg', // Replace with actual path
                title: 'Calm Mind',
                description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            },
            {
                icon: './logo/life-style.svg', // Replace with actual path
                title: 'Life Style',
                description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            },
            {
                icon: './logo/healty-body.svg', // Replace with actual path
                title: 'Healthy Body',
                description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            },
        ],
        videoSrc: './path-to-video/video.mp4', // Replace with actual video file path
        buttonText: "Book Appointment"
    };

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


    return (
        <div>
            <Hero
                title="About Us"
                backgroundColor="#D4CBC2"
            // breadcrumb="About Us"
            // illustrations={illustrations}
            />
            <AboutSection
                heading={aboutSectionData.heading}
                subHeading={aboutSectionData.subHeading}
                features={aboutSectionData.features}
                videoSrc={aboutSectionData.videoSrc}
                buttonText={aboutSectionData.buttonText}
            />
            <CheckSchedule
                heading="Shape Your Perfect Body"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                buttonText="Check Schedule"
                healedPeople={8}
                coachingExperience={10}
                circleText="Calm & Relax"
            />
            <Logos Logos={logos} />
            <TestimonialSection Testimonials={testimonials} />
            <h1>Meet The Therapist</h1>
            <TherapistGrid Therapist={teams} />
        </div>
    );
};

export default About;
