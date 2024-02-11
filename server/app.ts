import env from 'dotenv'
import express from 'express'
import routes from './routes'

env.config()
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

const app = express()

// to use JSON
app.use(express.json())

// use routes
app.use(routes)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
