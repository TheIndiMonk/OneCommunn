import { useEffect, useState } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { TherapistGrid } from '../../components/Card/TherapistGrid/TherapistGrid';
import { Therapist } from '../../lib/types/Therapist/TherapistTypes';


import styles from './services.module.css';
import { getCache, setCache } from '../../lib/Utils/cacheUtils';

export const Services = () => {

    const community = import.meta.env.VITE_APP_COMMUNITY  // 673811a2262dbf8ab84ff643
    const CACHE_KEY = 'services_data';
    const [services, setServices] = useState<Therapist[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            // Check if cached data exists
            const cachedData = getCache(CACHE_KEY);
            if (cachedData) {
                setServices(cachedData);
                setIsLoading(false);
                return;
            }

            // Fetch data if no cache is available
            try {
                const response = await fetch(
                    `https://api-uat.onecommunn.com/api/v2.0/builders/community/${community}`
                );
                const json = await response.json();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const fetchedServices = json?.data?.services.map((service: any) => ({
                    name: service.title,
                    image: service.images,
                    description: service.description,
                }));

                // Save fetched data to cache
                setCache(CACHE_KEY, fetchedServices);
                setServices(fetchedServices);
            } catch (error) {
                console.error('Error fetching services:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchServices();
    }, [community]);

    return (
        <>
            <Hero title={'Service'} backgroundColor="#D4CBC2" />

            {/* Services Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Services</h2>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <TherapistGrid Therapist={services} />
                )}
            </div>
        </>
    );
};
