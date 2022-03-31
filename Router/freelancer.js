import express from "express"
import logic from "../Controllers/Freelancer.js"

const server = express.Router()

server.get("/all", logic.getFreelancers)

server.get("/:id", logic.getFreelancerById)

server.post("", logic.postFreelancer)

server.get("", logic.getFreelancer)

export default server