import Service from '../Service/Freelancers.js'

class Freelancers {
    getFreelancers = async (req, res) => {
        const freelancers = await Service.getFreelancers()
        res.send(freelancers)
    }
}

export default new Freelancers()