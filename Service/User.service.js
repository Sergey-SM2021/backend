import { pool } from '../db.js'

class User {
    createFreelancer = async (mail, password) => {
        return "createFreelancer"
    }

    createClient = async (mail, password) => {
        return "createClient"
    }

    createUser = async (mail, password, type) => {
        switch (type) {
            case "freelancer":
                const freelancer = await this.createFreelancer(mail, password)
                return freelancer
            case "client":
                const client = await this.createClient(mail, password)
                return client
        }
    }
}

export const UserService = new User()