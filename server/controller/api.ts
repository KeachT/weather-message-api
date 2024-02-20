import { Request, Response } from 'express'
import { notFoundMsg } from './not-found'
import { WeatherResponseType } from '../types'
import {
  fetchGeoData,
  fetchWeatherDataDaily,
  getWeatherStatus,
} from '../service'

export const getWeatherMsgSpecificCity = async (
  req: Request,
  res: Response<WeatherResponseType>
) => {
  const { city } = req.params

  try {
    const cityGeoData = await fetchGeoData(city)
    if (!cityGeoData) {
      notFoundMsg(res)
      return
    }

    const { name, latitude, longitude } = cityGeoData
    const cityWeatherDataDaily = await fetchWeatherDataDaily(
      latitude,
      longitude
    )

    const {
      weather_code,
      temperature_2m_max,
      temperature_2m_min,
      precipitation_probability_max,
    } = cityWeatherDataDaily
    const weatherStatus = getWeatherStatus(weather_code[0])

    const response: WeatherResponseType = {
      message: `The weather in ${city} is ${weatherStatus}. The maximum temperature is ${temperature_2m_max}°C, the minimum temperature is ${temperature_2m_min}°C, and P.O.P is ${precipitation_probability_max}%.`,
      description: `The city's name is ${name}.`,
    }

    res.json(response)
  } catch (error) {
    console.error('Error occurred:', error)

    const response: WeatherResponseType = {
      message: 'Error occurred.',
      description: 'An error occurred while processing the request.',
    }

    res.status(500).json(response)
  }
}
