import { OrdersService } from "../Service/Orders.service.js"
import { pool } from '../db.js'

class Orders {
    getOrders = async (req, res) => {
        const orders = await OrdersService.getOrders()
        res.send(orders)
    }
    getClientOrders = async (req, res) => {
        try {
            const { userId, count } = req.params
            const orders = await (await pool.query(`select * from orders where "clientId" = ${userId} order by "id" desC limit ${count}`)).rows
            res.send(orders)
        } catch (error) {
            res.status(500).send("err")
        }
    }
}

export const OrdersController = new Orders()