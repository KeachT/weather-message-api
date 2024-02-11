import express, { Request, Response } from 'express'
import { getWeatherMsgSpecificCity } from '../controller/api'
import { WeatherResponseType } from '../types'

const router = express.Router()

router.get('/:city', (req: Request, res: Response<WeatherResponseType>) =>
  getWeatherMsgSpecificCity(req, res)
)

export default router
