import express, { Response } from 'express'
import { notFoundMsg } from '../controller/not-found'
import { WeatherResponseType } from '../types'

const router = express.Router()

// if routes don't match
router.use('*', (_, res: Response<WeatherResponseType>) => notFoundMsg(res))

export default router
