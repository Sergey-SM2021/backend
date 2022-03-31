import { pool } from '../db.js'

class logic {
    postClient = async (req, res) => {
        try {
            const { mail, password } = req.body
            const client = await pool.query(`insert into clients (mail, password) values('${mail}','${password}')`)
            res.send('Клиент был создан')
        } catch (error) {
            console.log(error)
            res.status(500).send("Error")
        }
    }

    getClient = async (req, res) => {
        try {
            const { mail, password } = req.query
            const client = await pool.query(`select * from clients where mail = '${mail}' and password = '${password}'`)
            res.send(client.rows[0])
        } catch (error) {
            res.status(500).send("Error")
        }
    }
}

export default new logic()