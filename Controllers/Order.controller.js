import { OrderService } from "../Service/Order.service.js"

class Order {
    postOrder = async (req, res) => {
        const order = req.body
        try {
            await OrderService.createOrder(order)
            res.send("Заказ был создан")
        } catch (error) {
            res.status(500).send(error)
        }
    }

    getOrder = async (req, res) => {
        const { id } = req.params
        try {
            const ReceivedOrder = await OrderService.getOrderById(id)
            res.send(ReceivedOrder)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

export const OrderController = new Order()