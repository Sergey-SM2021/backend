import express from "express"
import pg from "pg"
import cors from 'cors'
import { json } from "express"
import Router from "./router.js"

const { Pool } = pg

export const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "pgql2003",
    port: "3000",
    database: "FREELANCERDB"
})

const server = express()
server.use(cors())
server.use(json())
server.use(Router)

server.listen(8900)

// #TODO: work history mast return skills