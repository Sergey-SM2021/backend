import express from "express"
import cors from 'cors'
import { json } from "express"
import Client from "./Router/client.js"
import Freelancer from "./Router/freelancer.js"
import User from "./Router/user.js"

const server = express()
server.use(cors())
server.use(json())
server.use('/user',User)
server.use('/freelancer',Freelancer)
server.use('/client',Client)

server.listen(8900)

// #TODO: work history mast return skills