import { FreelancersService } from '../Service/Freelancers.service.js'

class Freelancers {
    getFreelancers = async (req, res) => {
        const freelancers = await FreelancersService.getFreelancers()
        res.send(freelancers)
    }
    getFreelancersByName = async (req, res) => {
        try {
            const { name } = req.query
            const freelancers = await FreelancersService.getFreelancers(name)
            res.send(freelancers)
        } catch (error) {
            res.status(500).send("Error")
        }
    }
}

export const FreelancersController = new Freelancers()