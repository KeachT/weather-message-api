import env from 'dotenv'
import express, { Request, Response } from 'express'
import { WeatherResponseType } from './types'

env.config()
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000
const app = express()

// to use JSON
app.use(express.json())

interface WeatherResponse {
  message: string
  description: string
}

app.get('/api/:city', (req: Request, res: Response<WeatherResponseType>) => {
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
})

// if routes don't match
app.use('*', (_, res) => {
  const response: WeatherResponseType = {
    message: 'Welcome to the weather-message-api!',
    description:
      'To get weather information about a specific city, please include the city name in the path. For example, to get information about Tokyo, make a GET request to /api/Tokyo.',
  }
  res.status(404).json(response)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
