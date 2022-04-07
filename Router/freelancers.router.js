import { Router } from 'express'
import logic from '../Controllers/Freelancers.js'

export const freelancers = Router()

freelancers.get("", logic.getFreelancers)