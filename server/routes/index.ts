import express from 'express'
import apiRouter from './api'
import notFoundRouter from './not-found'

const router = express.Router()

router.use('/api', apiRouter)
router.use('*', notFoundRouter) // if routes don't match

export default router
