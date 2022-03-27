import { pool } from './db.js'

class Servece {
    async getFreelancerById(id) {
        const freelancer = await (await pool.query(`select * from freelancers where id = ${id}`)).rows[0]
        return freelancer
    }
}

export default new Servece()