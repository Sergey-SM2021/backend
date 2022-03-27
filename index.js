import express from "express"
import cors from 'cors'
import { json } from "express"
import Router from "./router.js"

const server = express()
server.use(cors())
server.use(json())
server.use(Router)

server.listen(8900)

// #TODO: work history mast return skills