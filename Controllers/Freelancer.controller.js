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
}

export const FreelancerController = new Freelancer()