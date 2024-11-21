import { fetchWithFallback } from "../../Api/fetchWithFallback";
import { getApiData } from "../../Api/getApiResponse";
import { FAQItem } from "../../lib/types/FAQ/FAQItem";


export const FaqData:FAQItem[] = [
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore.',
        answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    },
    {
        question: 'Lorem ipsum was purposefully designed to have no meaning.',
        answer: 'Purpose of Lorem Ipsum',
    },
    {
        question: 'Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur.',
        answer: 'This text demonstrates the structure and flow of placeholder content.',
    },
    {
        question: 'Some claim lorem ipsum threatens to promote design over content while.',
        answer: 'However, it serves a practical purpose in early development stages.',
    },
];

export const fetchFaq = async (): Promise<FAQItem[]> => {
    return await fetchWithFallback(getApiData, "faq", FaqData);
};