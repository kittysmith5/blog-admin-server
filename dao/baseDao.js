const fs = require('fs/promises')
const path = require('node:path')

const toml = require('toml')
const mysql = require("mysql2/promise");

exports.db = async (sql, arr) => {
    let db;
    try {
        const dbConfig = await fs.readFile(path.resolve(__dirname, "../config.toml"), "utf-8")
        db = toml.parse(dbConfig)
    } catch (err) {
        console.log(err);
    }

    const connection = await mysql.createConnection({
        host: db.mysql.host,
        user: db.mysql.user,
        password: db.mysql.password,
        database: db.mysql.database,
        port: db.mysql.port,
    });
    const [data] = await connection.execute(sql, arr);
    connection.end();
    return data
}