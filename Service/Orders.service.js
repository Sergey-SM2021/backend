import { pool } from '../db.js'

class Orders {
    getOrders = async () => {
        const orders = await (await pool.query(`select * from orders`)).rows
        return orders
    }
}

export const OrdersService = new Orders()