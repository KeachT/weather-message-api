import axios from 'axios'

/**
 * Fetches geo data for a given city.
 *
 * @param {string} city - The name of the city.
 * @returns {Promise<object|null>} A promise that resolves to the geo data object or null if there was an error.
 */
export const fetchGeoData = async (city: string) => {
  const geocodingApi = 'https://geocoding-api.open-meteo.com/v1/search'
  const queryString = `name=${city}&count=1&language=en&format=json`
  const url = geocodingApi + '?' + queryString

  try {
    const response = await axios.get(url)
    return response?.data?.results?.[0]
  } catch (error) {
    console.error(`Error fetching geo data from '${url}':`, error)
    return null
  }
}
