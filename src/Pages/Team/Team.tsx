import React, { useState, useEffect } from 'react';
import styles from './team.module.css';

import { Hero } from '../../components/Hero/Hero';
import { FeaturedCard } from '../../components/Card/FeaturedCard/FeaturedCard';
import { TherapistGrid } from '../../components/Card/TherapistGrid/TherapistGrid';
import { Therapist } from '../../lib/types/Therapist/TherapistTypes';
import { useFetch } from '../../Api/apiHandler';

const CACHE_KEY = 'therapistsData';

const Team: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = useFetch<any>('https://api.onecommunn.com/api/v1/communities/66fe765b7433f90b2c92f315/home');
    const [teams, setTeams] = useState<Therapist[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null | any>(null);

    useEffect(() => {
        // Check if data is cached in localStorage
        const cachedData = localStorage.getItem(CACHE_KEY);

        if (cachedData) {
            // Use the cached data
            const parsedData: Therapist[] = JSON.parse(cachedData);
            setTeams(parsedData);
            setSelectedTherapist(parsedData.find(t => t.isFeatured) || parsedData[0]);
        } else if (data?.community?.teams) {
            // Fetch and cache data if not present in localStorage
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const fetchedTeams = data.community.teams.map((team: any) => ({
                name: team.name,
                title: team.designation,
                description: team.description,
                image: team.image,
                isFeatured: team.isFeatured || false,
                socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
            }));
            
            // Cache the data
            localStorage.setItem(CACHE_KEY, JSON.stringify(fetchedTeams));
            setTeams(fetchedTeams);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setSelectedTherapist(fetchedTeams.find((t: { isFeatured: any; }) => t.isFeatured) || fetchedTeams[0]);
        }
    }, [data]);

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
