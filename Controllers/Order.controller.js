import { OrderService } from "../Service/Order.service.js"

class Order {
    postOrder = async (req, res) => {
        const order = req.body
        await OrderService.createOrder(order)
        res.send("Заказ был создан")
    }
}

export const OrderController = new Order()