import express from "express"
import logic from "../Controllers/Freelancer.js"

export const freelancer = express.Router()

freelancer.get("/find", logic.findFreelancers)

freelancer.get("/:id", logic.getFreelancerById)

freelancer.post("", logic.postFreelancer)

freelancer.get("", logic.getFreelancer)