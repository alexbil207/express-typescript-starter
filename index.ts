import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { config } from './config'
import { exampleRouter } from './api/example/example.routes'

const path = config.isProduction() ? '.env.prod' : '.env.dev'

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
app.use('/example', exampleRouter)

app.get('/', (request: Request, response: Response) => {
    response.status(200).send(`localhost:${PORT}/example`)
})

app.listen(PORT, () => {
    console.log('Server running at PORT: ', PORT)
}).on('error', (error) => {
    throw new Error(error.message)
})
