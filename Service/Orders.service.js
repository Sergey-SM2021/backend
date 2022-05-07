import { pool } from '../db.js'

class Orders {
    getOrders = async () => {
        const orders = await (await pool.query(`select * from orders`)).rows
        const finallyOrders = await Promise.all(orders.map(async order => {
            const skills = await (await pool.query(`select * from skills where "orderId" = ${order.id}`)).rows
            const feedbacks = await (await pool.query(`select * from feedbacks where "orderId" = ${order.id}`)).rows
            return { ...order, skills, feedbacks }
        }))
        return finallyOrders
    }
    getClientOrders = async (userId, count) => {
        return await (await pool.query(`select * from orders where "clientId" = ${userId} order by "id" desC limit ${count}`)).rows
    }
}

export const OrdersService = new Orders()