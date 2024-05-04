import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { config } from './config'
import { exampleRouter } from './api/example/example.routes'

const path = config.isProduction() ? '.env.production' : '.env.dev'

dotenv.config({
    path: [path],
})

const app = express()
const PORT = process.env.PORT
const corsOrigins = process.env.CORS

const corsOptions = {
    origin: corsOrigins,
    credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/', exampleRouter)

app.listen(PORT, () => {
    console.log('Server running at PORT: ', PORT)
}).on('error', (error) => {
    throw new Error(error.message)
})
