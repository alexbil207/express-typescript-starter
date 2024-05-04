import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { config } from './config'

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

app.get('/', (request: Request, response: Response) => {
    response.status(200).send('Hello World')
})

app.listen(PORT, () => {
    console.log('Server running at PORT: ', PORT)
}).on('error', (error) => {
    throw new Error(error.message)
})
