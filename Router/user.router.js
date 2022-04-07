import express from "express"
import { UserController } from "../Controllers/User.controller.js"

export const user = express.Router()

user.get('', UserController.findUser)