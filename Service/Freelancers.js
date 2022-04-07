import { pool } from "../db.js"

class FreelancerService {
    getFreelancers = async () => {
        const freelancers = await pool.query(`select * from freelancers`)
        const newFreelancers = await Promise.all(freelancers.rows.map(async freelancer => {
            const review = await (await pool.query(`select * from review where freelancer = ${freelancer.id}`)).rows
            const stack = await (await pool.query(`select * from stack where freelancer = ${freelancer.id}`)).rows
            const workhistory = await (await pool.query(`select * from workhistory where freelancer = ${freelancer.id}`)).rows
            return ({ review, stack, workhistory, ...freelancer })
        }))
        return (await newFreelancers)
    }
}

export default new FreelancerService()