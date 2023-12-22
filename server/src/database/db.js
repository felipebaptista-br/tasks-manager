const postgres = require('postgres');
require('dotenv').config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sql = postgres({
  host: 'ep-shrill-butterfly-47488354.us-east-2.aws.neon.tech',
  database: 'tasks-manager',
  username: 'felipe.baptista06',
  password: 'RCLlgP1K3Axw',
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${'ep-shrill-butterfly-47488354'}`,
  },
});

module.exports = sql;