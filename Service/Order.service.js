import { pool } from '../db.js'

class Order {
    createOrder = async (order) => {
        pool.query(`insert into orders("title","price","description","views","sphereOfActivity","id") 
        values('${order.title}',${order.price},'${order.description}',${order.views},'${order.sphereOfActivity}',${order.id})`)
    }
    getOrderById = async (id) => {
        const ReceivedOrder = await (await pool.query(`select * from orders where id = ${id}`)).rows
        return ReceivedOrder
    }
}

export const OrderService = new Order()