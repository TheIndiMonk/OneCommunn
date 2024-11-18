import { useFetch } from "../../Api/apiHandler";
import { PriceCard } from "../../lib/types/PriceCard/PriceCard";
// import { PriceCardProps } from "../../lib/types/type";

export const fetchPlans = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, react-hooks/rules-of-hooks
  const { data } = useFetch<any>(
    "https://api.onecommunn.com/api/v1/communities/66fe765b7433f90b2c92f315/home"
  );
  const plans: PriceCard[] = data?.community?.plans || [];

  const planApiResponse = plans.map((plan) => ({
    name: plan.name,
    trainingCount: plan.duration,
    duration: plan.duration,
    offerValue: plan.offerValue,
    startDate: plan.startDate,
    endDate: plan.endDate,
    totalPlanValue: plan.totalPlanValue,
    description: plan.description,
  }));

  return planApiResponse;
};

// Dummy data for timetable
export const timeTables = [
  {
    title: "Vinyasa Yoga",
    times: [
      { time: "09:00 to 10:00" },
      { time: "09:00 to 10:00" },
      { time: "09:00 to 10:00" },
    ],
    days: [
      { day: "Monday to Wednesday" },
      { day: "Monday to Wednesday" },
      { day: "Monday to Wednesday" },
    ],
    buttonText: "Find Out More",
    link: "https://example.com/session1",
  },
  {
    title: "Ashtanga Yoga",
    times: [
      { time: "09:00 to 10:00" },
      { time: "09:00 to 10:00" },
      { time: "09:00 to 10:00" },
    ],
    days: [
      { day: "Monday to Wednesday" },
      { day: "Monday to Wednesday" },
      { day: "Monday to Wednesday" },
    ],
    buttonText: "Find Out More",
    link: "https://example.com/session1",
  },
];

// Dummy data for products
export const products = [
  {
    name: "Product 1",
    price: "29.99",
    image: "https://placehold.co/250x300",
    link: "/price",
  },
  {
    name: "Product 2",
    price: "39.99",
    image: "https://placehold.co/250x300",
    link: "/price",
  },
  {
    name: "Product 3",
    price: "29.99",
    image: "https://placehold.co/250x300",
    link: "/price",
  },
  {
    name: "Product 4",
    price: "39.99",
    image: "https://placehold.co/250x300",
    link: "/price",
  },
  {
    name: "Product 5",
    price: "29.99",
    image: "https://placehold.co/250x300",
    link: "/price",
  },
  {
    name: "Product 6",
    price: "39.99",
    image: "https://placehold.co/250x300",
    link: "/price",
  },
];
