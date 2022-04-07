import Service from '../Service/Freelancer.js'

class Freelancer {
    getFreelancerById = async (req, res) => {
        const id = req.params.id
        const newFreelancer = await Service.getFreelancerById(id)
        res.send(newFreelancer)
    }

    postFreelancer = async (req, res) => {
        try {
            const { mail, password } = req.body
            Service.postFreelancer(mail, password)
            res.send('Freelancer был создан')
        } catch (error) {
            console.log(error)
            res.status(500).send("Error")
        }
    }

    getFreelancer = async (req, res) => {
        try {
            const { mail, password } = req.query
            const id = await Service.getFreelancerIdByEmailPassword(mail,password)
            res.redirect(`freelancer/${id}`)
        } catch (error) {
            res.status(500).send("Error")
        }
    }

    findFreelancers = async (req, res) => {
        try {
            const { name } = req.query
            const freelancers = await Service.findFreelancerByName(name)
            res.send(freelancers)
        } catch (error) {
            res.status(500).send("Error")
        }
    }
}

export default new Freelancer()