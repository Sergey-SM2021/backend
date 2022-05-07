import { pool } from "../db.js"

class Freelancers {
    ConvertFreelancers = async (freelancers) => {
        const newFreelancers = await Promise.all(freelancers.rows.map(async freelancer => {
            const review = await (await pool.query(`select * from review where freelancer = ${freelancer.id}`)).rows
            const stack = await (await pool.query(`select * from stack where freelancer = ${freelancer.id}`)).rows
            const workhistory = await (await pool.query(`select * from workhistory where freelancer = ${freelancer.id}`)).rows
            return ({ review, stack, workhistory, ...freelancer })
        }))
        return (await newFreelancers)
    }
    getFreelancers = async () => {
        const freelancers = await pool.query(`select * from freelancers`)
        const ConvertedFreelancersArr = this.ConvertFreelancers(await freelancers)
        return (await ConvertedFreelancersArr)
    }
    getSortedFreelancersByName = async (name) => {
            try {
                const freelancers = await (await pool.query(`select * from freelancers ORDER BY "name" = '${name}' desc`))
                const newArr = await this.ConvertFreelancers(freelancers)
                return (await newArr)
            } catch (error) {
                throw "Freelancer не найден"
            }
    }
}

export const FreelancersService = new Freelancers()