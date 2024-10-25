import React, { useState } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { FeaturedCard } from '../../components/Card/FeaturedCard/FeaturedCard';
import TherapistGrid from '../../components/Card/TherapistGrid/TherapistGrid';
import styles from './team.module.css';
import { Therapist } from '../../lib/types/Therapist/TherapistTypes';
import { useFetch } from '../../Api/apiHandler';

const therapists: Therapist[] = [
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
    // ... other therapists
];

const Team: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = useFetch<any>('https://api.onecommunn.com/api/v1/communities/66fe765b7433f90b2c92f315/home');
    const teams: Therapist[] = data?.community?.teams || [];
    const [selectedTherapist, setSelectedTherapist] = useState<Therapist>(therapists[0]);

    const handleSelectTherapist = (therapist: Therapist) => {
        setSelectedTherapist(therapist);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const teamsApiResponse = (teams: any[]): Therapist[] => 
        teams.map(team => ({
            name: team.name,
            title: team.designation,
            description: team.description,
            image: team.image,
            socialLinks: {fb: "FB", tw: "TW", yu: "YU", in: "IN"}  // Ensure to map social links if available
        }));

    return (
        <div>
            <Hero
                title="Team" 
                backgroundColor='#D4CBC2'
            />
            <div className={styles.container}>
                <h1 className={styles.title}>Meet The Therapist</h1>
                <FeaturedCard 
                    name={selectedTherapist.name}
                    title={selectedTherapist.title || "Not Available"}
                    description={selectedTherapist.description}
                    image={selectedTherapist.image || "https://placehold.co/150x150" }
                    socialLinks={selectedTherapist.socialLinks || { fb: "", tw: "", yu: "", in: "" } }
                />
                <TherapistGrid 
                    Therapist={teamsApiResponse(teams)} 
                    onSelectTherapist={handleSelectTherapist} 
                />
            </div>
        </div>
    );
};

export default Team;
