import { fetchWithFallback } from "../../Api/fetchWithFallback";
import { getApiData } from "../../Api/getApiResponse";
import { Therapist } from "../../lib/types/Therapist/TherapistTypes";

export const therapists:Therapist[] = [
    {
        name: "Emily Burden",
        title: "Yoga Instructor",
        description: "Duis aute irure dolor in reprehenderit...",
        image: "https://placehold.co/150x150",
        socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    },
    {
        name: "Yogi Madi",
        title: "Yoga Instructor",
        description: "Description for Yogi Madi...",
        image: "https://placehold.co/150x150",
        socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    },
    {
        name: "Rohit Madi",
        title: "Yoga Instructor",
        description: "Description for Yogi Madi...",
        image: "https://placehold.co/150x150",
        socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    },
    {
        name: "Jhon Madi",
        title: "Yoga Instructor",
        description: "Description for Yogi Madi...",
        image: "https://placehold.co/150x150",
        socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    },
    {
        name: "Jhon Madi",
        title: "Yoga Instructor",
        description: "Description for Yogi Madi...",
        image: "https://placehold.co/150x150",
        socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" }
    },
    // Add more therapist data here
];

export const fetchTeam = async  (): Promise<Therapist[]> => {
    return await fetchWithFallback(getApiData, "teams", therapists);
};