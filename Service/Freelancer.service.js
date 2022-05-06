import { pool } from '../db.js'

class Freelancer {
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
            throw error
        }
    }

    getFreelancerIdByEmailPassword = async (mail, password) => {
        try {
            const id = await pool.query(`select id from freelancers where mail = '${mail}' and password = '${password}'`)
            return (await id.rows[0].id)
        } catch (error) {
            throw error
        }
    }

    updateFreelancer = async (id, freelancer) => {
        try {
            await freelancer.stack.forEach(async skill => {
                await pool.query(`delete from stack where freelancer = ${id}`)
                await pool.query(`insert into stack (name,freelancer) values('${skill.name}',${id}) `)
            })
            await freelancer.workhistory.forEach(async work => {
                await pool.query(`delete from workhistory where freelancer = ${id}`)
                await pool.query(`insert into workhistory (name,price,freelancer) values('${work.name}',${work.price},${id}) `)
            })
            await pool.query(`update freelancers set name = '${freelancer.name}',
                lastname = '${freelancer.lastname}',
                specialization = '${freelancer.specialization}', description = '${freelancer.description}',
                expiriens = '${freelancer.expiriens}', price = ${freelancer.price}, paymentmethod = '${freelancer.paymentmethod}'
                where id = ${id}`)
        } catch (error) {
            throw error
        }
    }
}

export const FreelancerService = new Freelancer()