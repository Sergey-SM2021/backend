import { pool } from '../db.js'

class User {
    findUser = async (req, res) => {
        try {
            const { mail, password } = req.query
            const USER = await (await pool.query(`SELECT type, id FROM USERS where mail = '${mail}' and password = '${password}'`)).rows[0]
            if(!USER){
                res.status(500).send('user не найден')
            }
            res.send(USER)
        } catch (error) {
            console.log(error)
        }
    }
}

export const UserController = new User()