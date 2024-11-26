import { useEffect, useState } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { TherapistGrid } from '../../components/Card/TherapistGrid/TherapistGrid';
import { Therapist } from '../../lib/types/Therapist/TherapistTypes';


import styles from './services.module.css';
import { fetchServices } from '../../data/HomePage/services';


export const Services = () => {
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
 


    return (
        <>
            <Hero title={'Service'} backgroundColor="#D4CBC2" />

            {/* Services Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Services</h2>
                <TherapistGrid Therapist={services} />
            </div>
        </>
    );
};
