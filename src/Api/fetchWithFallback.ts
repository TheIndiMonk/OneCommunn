/**
 * Utility function to handle API response with a fallback.
 * @param fetchFunction - Function to fetch data from the API.
 * @param key - The key to extract data from the API response.
 * @param fallbackData - The fallback data to use if the API call fails or is empty.
 * @returns {Promise<T[]>} The data fetched from API or the fallback data.
 */
export const fetchWithFallback = async <T>(
  fetchFunction: () => Promise<Record<string, unknown>>,
  key: string,
  fallbackData: T[]
): Promise<T[]> => {
  try {
    const apiData = await fetchFunction();
    if (apiData && Array.isArray(apiData[key])) {
      const data = apiData[key] as T[];
      if (data.length > 0) {
        return data;
      }
    }
  } catch (error) {
    console.error(`Error fetching data for key "${key}":`, error);
  }
  return fallbackData;
};
