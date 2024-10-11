import React from 'react';
import styles from './pricing.module.css';
import { Hero } from '../../components/Hero/Hero';
import { PriceCard } from '../../components/Card/PriceCard/PriceCard';
import BannerCard from '../../components/Banner/BannerCard';
import TimeTable from '../../components/TimeTable/TimeTable';
import ProductCard from '../../components/Card/ProductCard/ProductCard';



const Pricing: React.FC = () => {
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

    const packages = [
        {
            title: 'The One Month',
            trainingCount: 8,
            price: 70,
            schedule: 'Tue - Fri : 7:00am to 7:00pm',
            trainer: 'Jasmin',
            description: 'Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur Excepteur.',
            includeTax: 'Include Tax, Total',
        },
        {
            title: 'The One Month',
            trainingCount: 12,
            price: 120,
            schedule: 'Tue - Fri : 7:00am to 7:00pm',
            trainer: 'Jasmin',
            description: 'Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur Excepteur.',
            includeTax: 'Include Tax, Total',
        },
        {
            title: 'The One Month',
            trainingCount: 18,
            price: 160,
            schedule: 'Tue - Fri : 7:00am to 7:00pm',
            trainer: 'Jasmin',
            description: 'Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur Excepteur.',
            includeTax: 'Include Tax, Total',
        },
    ];
    const timeTables = [
        {
            title: "Vinyasa Yoga",
            times: [
                { "time": "09:00 to 10:00" },
                { "time": "09:00 to 10:00" },
                { "time": "09:00 to 10:00" }
            ],
            days: [
                { "day": "Monday to Wednesday" },
                { "day": "Monday to Wednesday" },
                { "day": "Monday to Wednesday" }
            ],
            buttonText: "Find Out More",
            link: "https://example.com/session1"

        },
        {
            title: "Ashtanga Yoga",
            times: [
                { "time": "09:00 to 10:00" },
                { "time": "09:00 to 10:00" },
                { "time": "09:00 to 10:00" }
            ],
            days: [
                { "day": "Monday to Wednesday" },
                { "day": "Monday to Wednesday" },
                { "day": "Monday to Wednesday" }
            ],
            buttonText: "Find Out More",
            link: "https://example.com/session1"
        }
    ];

    const products = [
        {
          name: 'Product 1',
          price: '29.99',
          image: 'https://placehold.co/300x350',
        },
        {
          name: 'Product 2',
          price: '39.99',
          image: 'https://placehold.co/300x350',

        },
        // Add more products as needed
      ];

    return (
        <div>
            <Hero
                title="Pricing"
                breadcrumb="Home • Pricing"
                illustrations={illustrations}
            />
            <div className={styles.container}>
                <h1 className={styles.title}>Prices And Packages</h1>
                <p className={styles.subtitle}>Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur.</p>
                <PriceCard pricingData={packages} />
                <BannerCard
                    title="Sale Now On"
                    subtitle="Enjoy Upto 70% Off *"
                    buttonText="Shop Now →"
                    description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
                    link='/shop'
                />
                <h1 className={styles.title}>Yoga Class Timing</h1>
                <p className={styles.subtitle}>Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur.</p>
                <TimeTable TimeTables={timeTables} />
                <ProductCard products={products}/>
            </div>
        </div>
    );
};

export default Pricing;
