import { SlidesBanners } from "../../lib/types/VerticalCarouselProps/SlidesBanners";
import { getApiData } from "../../Api/getApiResponse";
import { fetchWithFallback } from "../../Api/fetchWithFallback";

export const Banners: SlidesBanners[] = [
  {
    image: "https://via.placeholder.com/600x400",
    heading: "Welcome to Our Platform",
    subheading: "Your journey to success begins here.",
    BtnText: "Learn More",
    BtnLink: "/about-us",
  },
  {
    image: "https://via.placeholder.com/600x400",
    heading: "Our Services",
    subheading: "Explore the range of services we offer.",
    BtnText: "See Services",
    BtnLink: "/services",
  },
  {
    image: "https://via.placeholder.com/600x400",
    heading: "Testimonials",
    subheading: "Hear from our satisfied clients.",
    BtnText: "Read Reviews",
    BtnLink: "/testimonials",
  },
  {
    image: "https://via.placeholder.com/600x400",
    heading: "Get Started",
    subheading: "Sign up today and start your journey.",
    BtnText: "Join Us",
    BtnLink: "/signup",
  },
];

export const fetchBanners = async (): Promise<SlidesBanners[]> => {
  return await fetchWithFallback(getApiData, "banner", Banners);
};