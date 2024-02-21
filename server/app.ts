import 'dotenv/config'
import express from 'express'
import routes from './routes'

const port = Number(process.env.PORT) || 3000

const app = express()
app.use(express.json()) // to use JSON
app.use(routes) // use routes

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
