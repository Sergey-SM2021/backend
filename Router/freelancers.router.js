import { Router } from 'express'
import {FreelancersController} from '../Controllers/Freelancers.controller.js'

export const freelancers = Router()

freelancers.get("", FreelancersController.getFreelancers)

freelancers.get("/find", FreelancersController.getFreelancersByName)