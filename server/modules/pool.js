const pg = require('pg');
//connect to database

const config = {
  database: 'react_gallery',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
  console.log("connected to postgres");
});
pool.on("error", (err) => {
  console.log("error connecting to postgres", err);
});

module.exports = pool;
 