import { pool } from '../db.js'

class Order {
    createOrder = async (order) => {
        pool.query(`insert into orders("title","price","description","views","sphereOfActivity","id") 
        values('${order.title}',${order.price},'${order.description}',${order.views},'${order.sphereOfActivity}',${order.id})`)
    }
}

export const OrderService = new Order()