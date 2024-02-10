import env from 'dotenv'
import express from 'express'

env.config()

const app = express()
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ msg: '東京、今日の天気は晴れ。降水確率は10%です。' })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
