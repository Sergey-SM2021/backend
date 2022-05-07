import { OrdersService } from "../Service/Orders.service.js"

class Orders {
    getOrders = async (req, res) => {
        const orders = await OrdersService.getOrders()
        res.send(orders)
    }
    getClientOrders = async (req, res) => {
        const { userId, count } = req.params
        const orders = await OrdersService.getClientOrders(userId, count)
        res.send(orders)
    }
}

export const OrdersController = new Orders()