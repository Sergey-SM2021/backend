import { Router } from 'express'
import { OrderController } from '../Controllers/order.controller.js'

export const OrderRouter = Router()

OrderRouter.post('/create', OrderController.postOrder)

OrderRouter.get('/getById/:id', OrderController.getById)