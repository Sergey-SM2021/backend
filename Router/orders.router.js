import { Router } from 'express'
import { OrdersController } from '../Controllers/orders.controller.js'

export const ordersRouter = Router()

ordersRouter.get('/',OrdersController.getOrders)