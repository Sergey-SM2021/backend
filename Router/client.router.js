import express from "express"

import { ClientController } from "../Controllers/client.controller.js"

export const client = express.Router()

client.post("", ClientController.postClient)

client.get("/:id", ClientController.getClient)

client.put("/update/:id", ClientController.putClient)

client.post("/createOrder", ClientController.createOrder)

client.get("/orders/:count/:userId", ClientController.getOrders)

client.get("/order/:id", ClientController.getOrder)