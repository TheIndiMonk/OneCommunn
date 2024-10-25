 import React from 'react';
import { Hero } from '../../components/Hero/Hero';
import { Logos } from '../../components/LogosContainer/Logos';
import { AboutSection } from '../../components/AboutSection/AboutSection';
import TherapistGrid from '../../components/Card/TherapistGrid/TherapistGrid';
import { TestimonialSection } from '../../components/TestimonialCarousel/Testimonial';
import { CheckSchedule } from '../../components/CheckSchedule/CheckSchedule';
import { useFetch } from '../../Api/apiHandler';
import { Therapist } from '../../lib/types/Therapist/TherapistTypes';

// import styles from './about.module.css';

const About: React.FC = () => {
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


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = useFetch<any>(
        'https://api.onecommunn.com/api/v1/communities/66fe765b7433f90b2c92f315/home'
    );

    const teams: Therapist[] = data?.community?.teams || [];


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

        // eslint-disable-next-line @typescript-eslint/no-explicit-any    
    const teamsApiResponse = (teams: any[]) => 
        teams.map(team => ({
            name: team.name,
            title: team.designation,
            description: team.description,
            image: team.image,
        }));

        
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
            <TestimonialSection  Testimonials={testimonials}  />
            <h1>Meet The Therapist</h1>
            <TherapistGrid Therapist={teamsApiResponse(teams)}/>
        </div>
    );
};

export default About;
