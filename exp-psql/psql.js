const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  database: "exp_psql",
  port: "5432",
});

module.exports = pool;
