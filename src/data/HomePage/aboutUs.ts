import { fetchWithFallback } from "../../Api/fetchWithFallback";
import { getApiData } from "../../Api/getApiResponse";


export const aboutUs = {
    heading: "Yoga Dummy Data",
    mission: "At ReactSource Collective, our mission is to provide a supportive and engaging space where React developers of all levels can learn, share, and grow. We deliver high-quality content to help developers master React and stay current with industry trends.",
    vision: "Our vision is to build a leading global community where React developers collaborate, innovate, and contribute to the advancement of front-end development. ",
    about: "ReactSource Collective is the go-to community for React developers who want to stay updated with the latest trends, best practices, and expert insights in the React.js ecosystem. Whether you're just starting out or have years of experience, this community is designed to help you grow and stay informed through valuable content and discussions. ",
}

export const fetchBanners = async (): Promise<unknown> => {
    console.log( await(fetchWithFallback(getApiData, "aboutUs",[])))
    return await fetchWithFallback(getApiData, "aboutUs", [aboutUs]);
  };