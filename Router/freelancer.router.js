import express from "express"
import { FreelancerController } from "../Controllers/Freelancer.controller.js"

export const freelancer = express.Router()

freelancer.get("/:id", FreelancerController.getFreelancerById)

freelancer.put("/:id", FreelancerController.updateFreelancer)

freelancer.post("", FreelancerController.postFreelancer)

freelancer.get("", FreelancerController.getFreelancer)

freelancer.post("/feedback", FreelancerController.sendFeedback)