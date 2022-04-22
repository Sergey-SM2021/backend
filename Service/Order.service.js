import { pool } from '../db.js'

class Order {
    createOrder = async (order) => {
        pool.query(`insert into orders("title","price","description","views","sphereOfActivity","id") 
        values('${order.title}',${order.price},'${order.description}',${order.views},'${order.sphereOfActivity}',${order.id})`)
    }
    getOrderById = async (id) => {
        const ReceivedOrder = await (await pool.query(`select * from orders where id = ${id}`)).rows[0]
        let feedbacks = await (await pool.query(`SELECT * FROM "feedbacks" where "orderId" = ${id}`)).rows
        let skills = await (await pool.query(`SELECT * FROM "skills" where "orderId" = ${id}`)).rows
        let FinallyReceivedOrder = { ...ReceivedOrder, feedbacks, skills }
        console.log(FinallyReceivedOrder)
        return FinallyReceivedOrder
    }
}

export const OrderService = new Order()