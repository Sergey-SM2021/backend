import { Router } from 'express'
import { OrderController } from '../Controllers/Order.controller.js'

export const OrderRouter = Router()

OrderRouter.post('/create', OrderController.postOrder)

OrderRouter.get('/:id', OrderController.getOrder)