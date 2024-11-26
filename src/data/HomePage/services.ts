import { fetchWithFallback } from "../../Api/fetchWithFallback";
import { getApiData } from "../../Api/getApiResponse";
import { Therapist } from "../../lib/types/Therapist/TherapistTypes";


export const Services:Therapist[] = [
    {
        name: "Yoga Cloths",
        title: "",
        description: "Duis aute irure dolor in reprehenderit...",
        image: "https://placehold.co/150x150",
        socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    },
    {
        name: "Yoga Books",
        title: "",
        description: "Description for Yogi Madi...",
        image: "https://placehold.co/150x150",
        socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    },
    {
        name: "Yoga Accessories",
        title: "",
        description: "Description for Yogi Madi...",
        image: "https://placehold.co/150x150",
        socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    },
    {
        name: "Yoga Life Style",
        title: "",
        description: "Description for Yogi Madi...",
        image: "https://placehold.co/150x150",
        socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    },
];


export const fetchServices = async (): Promise<Therapist[]> => {
    return await fetchWithFallback(getApiData, "services", Services);
};