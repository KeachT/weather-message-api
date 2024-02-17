import axios from 'axios'

const FORECAST_DAYS = 1

/**
 * Fetch weather data for a specific location.
 * @param {number} latitude The latitude of the location.
 * @param {number} longitude The longitude of the location.
 * @returns {Promise<WeatherData | null>} The weather data or null if an error occurs.
 */
export const fetchWeatherDataDaily = async (
  latitude: number,
  longitude: number
) => {
  const weatherApiUrl = `https://api.open-meteo.com/v1/forecast`
  const queryString = `latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=${FORECAST_DAYS}`
  const url = weatherApiUrl + '?' + queryString

  try {
    const response = await axios.get(url)
    return response?.data?.daily || {}
  } catch (error) {
    console.error(`Error fetching geo data from '${url}':`, error)
    return null
  }
}
