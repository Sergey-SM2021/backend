import pg from "pg"

const { Pool } = pg

export const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "pgql2003",
    port: "3000",
    database: "FREELANCERDB"
})