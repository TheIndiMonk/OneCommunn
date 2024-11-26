import React, { useState, useEffect } from 'react';
import styles from './team.module.css';

import { Hero } from '../../components/Hero/Hero';
import { FeaturedCard } from '../../components/Card/FeaturedCard/FeaturedCard';
import { TherapistGrid } from '../../components/Card/TherapistGrid/TherapistGrid';
import { Therapist } from '../../lib/types/Therapist/TherapistTypes';

import { fetchTeam } from '../../data/HomePage/therapists';


const Team: React.FC = () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null | any>(null);

    const [teams, setTeams] = useState<Therapist[]>([]);
    useEffect(() => {
        const loadTherapists = async () => {
            const data = await fetchTeam();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const modifiedTeam = data.map((therapists: any) => ({
                ...therapists,
                image: therapists.avatar?.value || ""
            }));
            setTeams(modifiedTeam);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setSelectedTherapist(modifiedTeam.find((t: { isFeatured: any; }) => t.isFeatured) || modifiedTeam[0]);
        };
        loadTherapists();
    }, []);



    const handleSelectTherapist = (therapist: Therapist) => {
        setSelectedTherapist(therapist);
    };

    return (
        <div>
            <Hero title="Team" backgroundColor='#D4CBC2' />
            <div className={styles.container}>
                <h1 className={styles.title}>Meet The Therapist</h1>
                {selectedTherapist && (
                    <FeaturedCard
                        name={selectedTherapist.name}
                        title={selectedTherapist.title || selectedTherapist.designation}
                        description={selectedTherapist.description}
                        image={selectedTherapist.image || "https://placehold.co/150x150"}
                        socialLinks={selectedTherapist.socialLinks || { fb: "", tw: "", yu: "", in: "" }}
                    />
                )}
                <TherapistGrid
                    Therapist={teams}
                    onSelectTherapist={handleSelectTherapist}
                />
            </div>
        </div>
    );
};

export default Team;
