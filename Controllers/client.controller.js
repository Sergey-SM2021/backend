import { pool } from '../db.js'

// Это заказчик
class Client {
    postClient = async (req, res) => {
        try {
            const { mail, password } = req.body
            const client = await pool.query(`insert into clients (mail, password) values('${mail}','${password}')`)
            res.send('Клиент был создан')
        } catch (error) {
            res.status(500).send("Error")
        }
    }

    getClient = async (req, res) => {
        try {
            const id = req.params.id
            const client = await (await pool.query(`select * from clients where id = ${id}`)).rows[0]
            client.orders = await (await pool.query(`select * from orders where "clientId" = ${id} order by orders.id desc limit 3`)).rows
            res.send(client)
        } catch (error) {
            res.status(500).send("err")
        }
    }

    putClient = async (req, res) => {
        try {
            const { id, name, phone } = req.body
            await pool.query(`UPDATE clients SET "phone" = '${phone}' where id = ${id}`)
            await pool.query(`UPDATE clients SET "name" = '${name}' where id = ${id}`)
            res.send("newClient")
        } catch (error) {
            res.status(500).send("err")
        }
    }
}

export const ClientController = new Client()