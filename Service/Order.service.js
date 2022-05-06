import { pool } from '../db.js'

class Order {
    createOrder = async (order) => {
        try {
            console.log("order");
            const id = await (await pool.query(`insert into orders("title","price","description","sphereOfActivity","clientId") 
            values('${order.title}',${order.price},'${order.description}','${order.sphereOfActivity}',${order.clientId}) RETURNING id`)).rows[0].id
            order.skills.forEach(async skill => {
                await pool.query(`insert into skills("name","orderId") values('${skill.name}',${id})`)
            })
        } catch (error) {
            throw error
        }
    }
    getOrderById = async (id) => {
        const ReceivedOrder = await (await pool.query(`select * from orders where id = ${id}`)).rows[0]
        let feed = await (await pool.query(`SELECT * FROM "feedbacks" where "orderId" = ${id}`)).rows
        const feedbacks = await Promise.all(feed.map(async feedback => {
            const person = await (await pool.query(`select * from "freelancers" where freelancers.id = ${feedback.freelancerId}`)).rows[0]
            return ({
                person,
                message: feedback.message
            })
        }))
        let skills = await (await pool.query(`SELECT * FROM "skills" where "orderId" = ${id}`)).rows
        let FinallyReceivedOrder = { ...ReceivedOrder, feedbacks, skills }
        return FinallyReceivedOrder
    }
}

export const OrderService = new Order()