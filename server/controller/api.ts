import { Request, Response } from 'express'
import { WeatherResponseType } from '../types'

export const getWeatherMsgSpecificCity = (
  req: Request,
  res: Response<WeatherResponseType>
) => {
  const { city } = req.params
  const maxTempF = 30
  const minTempF = 20
  const maxTempC = 10
  const minTempC = 0
  const pop = 15

  const response: WeatherResponseType = {
    message: `The weather in ${city} is sunny. The maximum temperature is ${maxTempF}°F (${maxTempC}°C), the minimum temperature is ${minTempF}°F (${minTempC}°C), and P.O.P is ${pop}%.`,
    description: `The city's name is ${city}.`,
  }

  res.json(response)
}
