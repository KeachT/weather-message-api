enum WeatherStatus {
  Sunny = 0,
  MainlySunny = 1,
  PartlyCloudy = 2,
  Cloudy = 3,
}

/**
 * Get the weather status based on the provided code.
 * @param {number} code - The code representing the weather status.
 * @returns {string} The corresponding weather status or 'Rain' if code is invalid.
 */
export const getWeatherStatus = (code: number): string => {
  return WeatherStatus[code] || 'Rain'
}
