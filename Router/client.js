import express from "express"
import logic from "../Controllers/client.js"

const server = express.Router()

server.post("", logic.postClient)

server.get("", logic.getClient)

export default server