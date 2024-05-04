import express from 'express'
import { getAll, getById, save, update, remove } from './example.controller'

export const exampleRouter = express.Router()

exampleRouter.get('/', getAll)
exampleRouter.get('/:id', getById)
exampleRouter.post('/', save)
exampleRouter.put('/', update)
exampleRouter.delete('/:id', remove)
