import express from "express"
import user from "../Controllers/user.js"

const server = express.Router()

server.get('', user.findUser)

export default server