import express from "express"
import { FreelancerController } from "../Controllers/Freelancer.controller.js"

export const freelancer = express.Router()

freelancer.get("/:id", FreelancerController.getFreelancerById)

freelancer.post("", FreelancerController.postFreelancer)

freelancer.get("", FreelancerController.getFreelancer)