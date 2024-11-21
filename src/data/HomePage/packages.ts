import { fetchWithFallback } from "../../Api/fetchWithFallback";
import { getApiData } from "../../Api/getApiResponse";
import { PriceCardProp } from "../../lib/types/PriceCard/PriceCard";


export const packages:PriceCardProp[] = [
    {
        name: 'The One Month',
        duration: 'Month',
        interval: 8,
        totalPlanValue: 70,
        startDate: "2024-10-07T05:30:00.000Z",
        endDate: "2024-11-07T05:30:00.000Z",
        schedule: 'Tue - Fri : 7:00am to 7:00pm',
        trainer: 'Jasmin',
        description: 'Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur Excepteur.',
        includeTax: 'Include Tax, Total',
        getStartedLink: "/beginner-plan", 
    },
    {
        name: 'The One Month',
        duration: 'Month',
        interval: 12,
        totalPlanValue: 120,
        startDate: "2024-10-07T05:30:00.000Z",
        endDate: "2024-11-07T05:30:00.000Z",
        trainer: 'Jasmin',
        description: 'Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur Excepteur.',
        includeTax: 'Include Tax, Total',
        getStartedLink: "/beginner-plan",

    },
    {
        name: 'The One Month',
        duration: 'Month',
        interval: 18,
        totalPlanValue: 160,
        startDate: "2024-10-07T05:30:00.000Z",
        endDate: "2024-11-07T05:30:00.000Z",
        trainer: 'Jasmin',
        description: 'Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur Excepteur.',
        includeTax: 'Include Tax, Total',
        getStartedLink: "/beginner-plan",
    },
];

export const fetchPackages = async  (): Promise<PriceCardProp[]> => {
    return await fetchWithFallback(getApiData, "plans", packages);
};