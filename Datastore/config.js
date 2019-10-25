/* Connect Database */

const Pool = require('pg').Pool;
const pool = new Pool({
    user : 'me',
    host : 'localhost',
    database : 'APIPegawai',
    password : '',
    port : '8080'
});

module.exports = pool;