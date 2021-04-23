const mysql = require('mysql');
const promisify = require('util').promisify;

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect();

const query = promisify(connection.query).bind(connection);

module.exports =  async (sql, values) => {
    try {
        return await query({
            sql,
            values,
            timeout: 5000,
        });
    } catch (error) {
        console.log(error);
        return null;
    }
}