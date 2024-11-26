import { fetchWithFallback } from "../../Api/fetchWithFallback";
import { getApiData } from "../../Api/getApiResponse";


export const gallery = ['./Photos/image.png','./Photos/image.png'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchGallery = async (): Promise<any[]> => {
    return await fetchWithFallback(getApiData, "gallery", gallery);
};