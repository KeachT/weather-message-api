import { Response } from 'express'
import { WeatherResponseType } from '../types'

export const notFoundMsg = (res: Response<WeatherResponseType>) => {
  const response: WeatherResponseType = {
    message: 'Welcome to the weather-message-api!',
    description:
      'To get weather information about a specific city, please include the city name in the path. For example, to get information about Tokyo, make a GET request to /api/Tokyo.',
  }

  res.status(404).json(response)
}
