import { pool } from './db.js'
import Service from './Service.js'

class logic {
    getFreelancers = async (req, res) => {
        const freelancers = await pool.query(`select * from freelancers`)
        const newFreelancers = await Promise.all(freelancers.rows.map(async freelancer => {
            const review = await (await pool.query(`select * from review where freelancer = ${freelancer.id}`)).rows
            const stack = await (await pool.query(`select * from stack where freelancer = ${freelancer.id}`)).rows
            const workhistory = await (await pool.query(`select * from workhistory where freelancer = ${freelancer.id}`)).rows
            return ({ review, stack, workhistory, ...freelancer })
        }))
        res.send((newFreelancers))
    }

    getFreelancerById = async (req, res) => {
        const id = req.params.id
        const freelancer = await (await pool.query(`select * from freelancers where id = ${id}`)).rows[0]
        const review = await (await pool.query(`select * from review where freelancer = ${id}`)).rows
        const stack = await (await pool.query(`select * from stack where freelancer = ${id}`)).rows
        const workhistory = await (await pool.query(`select * from workhistory where freelancer = ${id}`)).rows
        const newFreelancer = { ...freelancer, review, stack, workhistory }
        res.send(newFreelancer)
    }

    postFreelancer = async (req, res) => {
        try {
            const { mail, password } = req.body
            console.log(mail, password)
            const freelancer = await pool.query(`insert into freelancers (mail, password) values('${mail}','${password}')`)
            res.send('Freelancer был создан')
        } catch (error) {
            console.log(error)
            res.status(500).send("Error")
        }
    }

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

    getFreelancer = async (req, res) => {
        try {
            const { mail, password } = req.query
            const id = await pool.query(`select id from freelancers where mail = '${mail}' and password = '${password}'`)
            const idDirectly = await id.rows[0].id
            res.redirect(`freelancer/${idDirectly}`)
        } catch (error) {
            res.status(500).send("Error")
        }
    }
}

export default new logic()