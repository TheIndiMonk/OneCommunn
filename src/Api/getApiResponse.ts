import axios from 'axios';

interface ApiResponse {
  data: Record<string, unknown>; // API response should be an object, not an array
}

/**
 * Middleware function to fetch data from the API.
 * @returns A Promise resolving to the fetched data or throwing an error.
 */
export const getApiData = async (): Promise<ApiResponse["data"]> => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const endpoint = `${BASE_URL}${import.meta.env.VITE_APP_COMMUNITY}`;

  try {
    const response = await axios.get(endpoint);
    return response.data.data as ApiResponse["data"];
  
  } catch (err) {
    throw new Error(
      `Failed to fetch data: ${err instanceof Error ? err.message : String(err)}`
    );
  }
};
