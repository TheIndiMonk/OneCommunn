import React, { useEffect, useState } from 'react';
import styles from './pricing.module.css';
import { Hero } from '../../components/Hero/Hero';
import { PriceCard } from '../../components/Card/PriceCard/PriceCard';
import BannerCard from '../../components/Banner/BannerCard';
import TimeTable from '../../components/TimeTable/TimeTable';
import { ProductCard } from '../../components/Card/ProductCard/ProductCard';
import InstagramFollow from '../../components/InstagramCard/InstagramFollow';
import { PriceCardProps } from '../../lib/types/type';

import { FaLeaf } from 'react-icons/fa';
import { getCache, setCache } from '../../lib/Utils/cacheUtils';

const Pricing: React.FC = () => {
    const community = import.meta.env.VITE_APP_COMMUNITY  // 673811a2262dbf8ab84ff643
    const CACHE_KEY = 'pricing_data';
    const [plans, setPlans] = useState<PriceCardProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPricing = async () => {
            // Check if cached data exists
            const cachedData = getCache(CACHE_KEY);
            if (cachedData) {
                setPlans(cachedData);
                setIsLoading(false);
                return;
            }

            // Fetch data if no cache is available
            try {
                const response = await fetch(
                  `https://api-uat.onecommunn.com/api/v2.0/builders/community/${community}`,

                );
                const json = await response.json();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const fetchedPlans = json?.data?.plans.map((plan: any) => ({
                    name: plan.name,
                    trainingCount: plan.interval,
                    duration: plan.duration,
                    offerValue: plan.offerValue,
                    startDate: plan.startDate,
                    endDate: plan.endDate,
                    totalPlanValue: plan.totalPlanValue,
                    includeTax: plan.summary,
                    description: plan.description,
                }));

                // Save fetched data to cache
                setCache(CACHE_KEY, fetchedPlans);
                setPlans(fetchedPlans);
            } catch (error) {
                console.error('Error fetching pricing data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPricing();
    }, []);

    const timeTables = [
        {
            title: 'Vinyasa Yoga',
            times: [
                { time: '09:00 to 10:00' },
                { time: '09:00 to 10:00' },
                { time: '09:00 to 10:00' },
            ],
            days: [
                { day: 'Monday to Wednesday' },
                { day: 'Monday to Wednesday' },
                { day: 'Monday to Wednesday' },
            ],
            buttonText: 'Find Out More',
            link: 'https://example.com/session1',
        },
        {
            title: 'Ashtanga Yoga',
            times: [
                { time: '09:00 to 10:00' },
                { time: '09:00 to 10:00' },
                { time: '09:00 to 10:00' },
            ],
            days: [
                { day: 'Monday to Wednesday' },
                { day: 'Monday to Wednesday' },
                { day: 'Monday to Wednesday' },
            ],
            buttonText: 'Find Out More',
            link: 'https://example.com/session1',
        },
    ];

    const products = [
        {
            name: 'Product 1',
            price: '29.99',
            image: 'https://placehold.co/250x300',
            link: '/price',
        },
        {
            name: 'Product 2',
            price: '39.99',
            image: 'https://placehold.co/250x300',
            link: '/price',
        },
        // Add more products as needed
    ];

    const cardsData = [
        {
            id: 1,
            isCenterCard: false,
            content: (
                <>
                    <FaLeaf className="fas fa-leaf" />
                    <p>Yoka@Jew</p>
                    <p>Follow Us On</p>
                    <p>Instagram</p>
                </>
            ),
        },
        // Add more cards as needed
    ];

    return (
        <div>
            <Hero title="Pricing" backgroundColor="#D4CBC2" />
            <div className={styles.container}>
                <h1 className={styles.title}>Prices And Packages</h1>
                <p className={styles.subtitle}>
                    Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur.
                </p>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <PriceCard pricingData={plans} />
                )}
                <BannerCard
                    title="Sale Now On"
                    subtitle="Enjoy Upto 70% Off *"
                    buttonText="Shop Now"
                    description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
                    link="/shop"
                />
                <h1 className={styles.title}>Yoga Class Timing</h1>
                <p className={styles.subtitle}>
                    Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur.
                </p>
                <TimeTable TimeTables={timeTables} />
                <ProductCard products={products} viewAllLink="/products" />
                <InstagramFollow cards={cardsData} />
            </div>
        </div>
    );
};

export default Pricing;
