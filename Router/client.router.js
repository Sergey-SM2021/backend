import express from "express"

import { ClientController } from "../Controllers/client.controller.js"

export const client = express.Router()

client.post("", ClientController.postClient)

client.get("", ClientController.getClient)