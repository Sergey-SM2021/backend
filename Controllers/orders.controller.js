import { OrdersService } from "../Service/Orders.service.js"

class Orders {
    getOrders = async (req, res) => {
        const orders = await OrdersService.getOrders()
        console.log(orders)
        res.send(orders)
    }
}

export const OrdersController = new Orders() 