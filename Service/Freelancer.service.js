import {pool} from '../db.js'

class Freelancer{
    getFreelancerById = async (id) => {
        const freelancer = await (await pool.query(`select * from freelancers where id = ${id}`)).rows[0]
        const review = await (await pool.query(`select * from review where freelancer = ${id}`)).rows
        const stack = await (await pool.query(`select * from stack where freelancer = ${id}`)).rows
        const workhistory = await (await pool.query(`select * from workhistory where freelancer = ${id}`)).rows
        const newFreelancer = { ...freelancer, review, stack, workhistory }
        return await newFreelancer
    }
    postFreelancer = async (mail, password) => {
        try {
            const freelancer = await pool.query(`insert into freelancers (mail, password) values('${mail}','${password}')`)
            return await freelancer
        } catch (error) {
            console.log(error)
            res.status(500).send("Error")
        }
    }
    getFreelancerIdByEmailPassword = async (mail, password) => {
        try {
            const id = await pool.query(`select id from freelancers where mail = '${mail}' and password = '${password}'`)
            return (await id.rows[0].id)
        } catch (error) {
            res.status(500).send("Error")
        }
    }
}

export const FreelancerService = new Freelancer()