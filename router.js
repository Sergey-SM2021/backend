import express from "express"
import logic from "./controller.js"

const server = express.Router()

server.get("/freelancers", logic.getFreelancers)

server.get("/freelancer/:id", logic.getFreelancerById)

server.post("/freelancer", logic.postFreelancer)

server.get("/freelancer", logic.getFreelancer)

server.post("/client", logic.postClient)

server.get("/client", logic.getClient)

export default server