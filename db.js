const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_DATABASE || "mydb",
  password: process.env.DB_PASSWORD || "dhior",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
});

module.exports = pool;
