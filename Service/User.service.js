import { pool } from '../db.js'

class User {
    createFreelancer = async (mail, password, id) => {
        await pool.query(`insert into freelancers(mail,password,id) values ('${mail}','${password}',${id})`)
    }

    createClient = async (mail, password, id) => {
        await pool.query(`insert into clients(mail,password,id) values ('${mail}','${password}',${id})`)
    }

    createUser = async (mail, password, type) => {
        await pool.query(`insert into users(mail,password,type) values ('${mail}','${password}','${type}')`)
        const id = await (await pool.query(`select id from users order by id desc limit 1`)).rows[0].id
        switch (type) {
            case "freelancer":
                await this.createFreelancer(mail, password, id)
            case "client":
                await this.createClient(mail, password, id)
        }
    }
}

export const UserService = new User()