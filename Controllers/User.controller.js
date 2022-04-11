import { pool } from '../db.js'
import { UserService } from '../Service/User.service.js'

// Это любой пользователь
class User {
    findUser = async (req, res) => {
        try {
            const { mail, password } = req.query
            console.log(mail)
            console.log(password)
            const USER = await (await pool.query(`SELECT type, id FROM USERS where mail = '${mail}' and password = '${password}'`)).rows[0]
            if (!USER) {
                res.status(500).send('user не найден')
            }
            res.send(USER)
        } catch (error) {
            console.log(error)
        }
    }
    createUser = async (req, res) => {
        const { mail, password, type } = req.body
        const newUser = await UserService.createUser(mail, password, type)
        res.send(newUser)
    }
}

export const UserController = new User()