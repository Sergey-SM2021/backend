import express from "express"
import userController from "../Controllers/user.js"

export const user = express.Router()

user.get('', userController.findUser)