import { pool } from '../db.js'
import { FreelancerService } from '../Service/Freelancer.service.js'

class Freelancer {
    getFreelancerById = async (req, res) => {
        const id = req.params.id
        const newFreelancer = await FreelancerService.getFreelancerById(id)
        res.send(newFreelancer)
    }

    postFreelancer = async (req, res) => {
        try {
            const { mail, password } = req.body
            FreelancerService.postFreelancer(mail, password)
            res.send('Freelancer был создан')
        } catch (error) {
            console.log(error)
            res.status(500).send("Error")
        }
    }

    getFreelancer = async (req, res) => {
        try {
            const { mail, password } = req.query
            const id = await FreelancerService.getFreelancerIdByEmailPassword(mail, password)
            res.redirect(`freelancer/${id}`)
        } catch (error) {
            res.status(500).send("Error")
        }
    }

    updateFreelancer = async (req, res) => {
        const { id } = req.params
        const freelancer = req.body
        console.log(freelancer)
        try {
            await FreelancerService.updateFreelancer(id, freelancer)
            res.send("")
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }

    sendFeedback = async (req, res) => {
        const { feedback, freelancerId, orderId } = req.body
        try {
            pool.query(`insert into feedbacks(message,"freelancerId","orderId") values('${feedback}',${freelancerId},${orderId})`)
            res.send("Feedback был создан")
        } catch (error) {
            res.status(500).send("Feedback был создан")
        }
    }
}

export const FreelancerController = new Freelancer()