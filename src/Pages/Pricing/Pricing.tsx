import React from 'react';
import styles from './pricing.module.css';
import { Hero } from '../../components/Hero/Hero';
import { PriceCard } from '../../components/Card/PriceCard/PriceCard';
import BannerCard from '../../components/Banner/BannerCard';
import TimeTable from '../../components/TimeTable/TimeTable';
import {ProductCard} from '../../components/Card/ProductCard/ProductCard';
import InstagramFollow from '../../components/InstagramCard/InstagramFollow';
import { PriceCardProps } from '../../lib/types/type';
import { useFetch } from '../../Api/apiHandler';
import { FaLeaf } from 'react-icons/fa';



const Pricing: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = useFetch<any>(
        'https://api-uat.onecommunn.com/api/v2.0/builders/community/673811a2262dbf8ab84ff643'
    );
    const plans: PriceCardProps[] = data?.data?.plans || [];


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const planApiResponse = (plans: any[]) =>
      plans.map(plan => ({
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

    // const packages = [
    //     {
    //         title: 'The One Month',
    //         trainingCount: 8,
    //         price: 70,
    //         schedule: 'Tue - Fri : 7:00am to 7:00pm',
    //         trainer: 'Jasmin',
    //         description: 'Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur Excepteur.',
    //         includeTax: 'Include Tax, Total',
    //         getStartedLink: "/beginner-plan", 
    //     },
    //     {
    //         title: 'The One Month',
    //         trainingCount: 12,
    //         price: 120,
    //         schedule: 'Tue - Fri : 7:00am to 7:00pm',
    //         trainer: 'Rohit',
    //         description: 'Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur Excepteur.',
    //         includeTax: 'Include Tax, Total',
    //         getStartedLink: "/beginner-plan",
    //         primary: true,
            
    //     },
    //     {
    //         title: 'The One Month',
    //         trainingCount: 18, 
    //         price: 160,
    //         schedule: 'Tue - Fri : 7:00am to 7:00pm',
    //         trainer: 'Jasmin',
    //         description: 'Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur Excepteur.',
    //         includeTax: 'Include Tax, Total',
    //         getStartedLink: "/beginner-plan",
    //     },
    // ];
    
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
            image: 'https://placehold.co/250x300',
            link: '/price'
        },
        {
            name: 'Product 2',
            price: '39.99',
            image: 'https://placehold.co/250x300',
            link: '/price'


        },
        {
            name: 'Product 3',
            price: '29.99',
            image: 'https://placehold.co/250x300',
            link: '/price'

        },
        {
            name: 'Product 4',
            price: '39.99',
            image: 'https://placehold.co/250x300',
            link: '/price'


        }, {
            name: 'Product 5',
            price: '29.99',
            image: 'https://placehold.co/250x300',
            link: '/price'

        },
        {
            name: 'Product 6',
            price: '39.99',
            image: 'https://placehold.co/250x300',
            link: '/price'


        },
        // Add more products as needed
    ];

    const cardsData = [
        { id: 1,
            isCenterCard: false,
          content: (
            <>
              <FaLeaf className="fas fa-leaf" />
              <p> Yoka@Jew</p>
              <p>Follow Us On</p>
              <p>Instagram</p>

            </>
          ),
         },
        { id: 2, 
            isCenterCard: false,
          content: (
            <>
              <FaLeaf className="fas fa-leaf" />
              <p> Yoka@Jew</p>
              <p>Follow Us On</p>
              <p>Instagram</p>

            </>
          ),
        },
        {
          id: 3,
          isCenterCard: true,
          content: (
            <>
              <FaLeaf className="fas fa-leaf" />
              <p> Yoka@Jew</p>
              <p>Follow Us On</p>
              <p>Instagram</p>

            </>
          ),
        },
        { id: 4, 
            isCenterCard: false,
          content: (
            <>
              <FaLeaf className="fas fa-leaf" />
              <p> Yoka@Jew</p>
              <p>Follow Us On</p>
              <p>Instagram</p>

            </>
          ),
         },
        { id: 5, 
            isCenterCard: false,
          content: (
            <>
              <p> Yoka@Jew</p>
              <p>Follow Us On</p>
              <p>Instagram</p>

            </>
          ),
        },
      ];


    return (
        <div>
            <Hero
                title="Pricing"
                backgroundColor="#D4CBC2"
            />
            <div className={styles.container}>
                <h1 className={styles.title}>Prices And Packages</h1>
                <p className={styles.subtitle}>Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur.</p>
                <PriceCard pricingData={planApiResponse(plans)} />

                <BannerCard
                    title="Sale Now On"
                    subtitle="Enjoy Upto 70% Off *"
                    buttonText="Shop Now"
                    description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
                    link='/shop'
                />
                <h1 className={styles.title}>Yoga Class Timing</h1>
                <p className={styles.subtitle}>Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur.</p>
                <TimeTable TimeTables={timeTables} />
                <ProductCard products={products} viewAllLink="/products"/>
                <InstagramFollow cards={cardsData} />
            </div>
        </div>
    );
};

export default Pricing;
