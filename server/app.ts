import env from 'dotenv'
import express, { Request, Response } from 'express'

env.config()

const app = express()
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

// to use JSON
app.use(express.json())

interface WeatherResponse {
  msg: string
}

app.get('/api', (req: Request, res: Response<WeatherResponse>) => {
  const { city } = req.query

  const maxTempF = 30
  const minTempF = 20
  const maxTempC = 10
  const minTempC = 0
  const pop = 15

  const msg = !city
    ? 'Please specify the city using a query string.'
    : `The weather in ${city} is sunny. The maximum temperature is ${maxTempF}°F (${maxTempC}°C), the minimum temperature is ${minTempF}°F (${minTempC}°C), and P.O.P is ${pop}%.`

  const response: WeatherResponse = { msg }

  res.json(response)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
