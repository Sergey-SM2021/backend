import express from "express"
import logic from "../Controllers/client.js"

export const client = express.Router()

client.post("", logic.postClient)

client.get("", logic.getClient)