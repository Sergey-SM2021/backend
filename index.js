import express from "express"
import cors from 'cors'
import { json } from "express"
import { client } from "./Router/client.router.js"
import { freelancer } from "./Router/freelancer.router.js"
import { user } from "./Router/user.router.js"
import { freelancers } from './Router/freelancers.router.js'
import fileUpload from 'express-fileupload'

const server = express()
server.use(cors())
server.use(json())
server.use('/freelancers', freelancers)
server.use('/user', user)
server.use('/freelancer', freelancer)
server.use('/client', client)
server.post("/file", (req, res) => {
    
})

server.listen(8900)

// #TODO: work history mast return skills