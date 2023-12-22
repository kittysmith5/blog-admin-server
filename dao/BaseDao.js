const path = require('node:path')
const fs = require('fs/promises')

const toml = require('toml')
const mysql = require('mysql2/promise');

class BaseDao {
    constructor() {
        this.config = null;
        this.loadConfig().catch(err => {
            console.log("加载数据库文件失败： ", err)
        });
    }

    async loadConfig() {
        const confPath = path.resolve(__dirname, "../config.toml")
        try {
            const configFile = await fs.readFile(confPath, 'utf-8');
            const config = toml.parse(configFile);
            this.config = config.mysql;
        } catch (error) {
            console.error('Error loading database configuration:', error);
            throw error;
        }
    }

    async getConnection() {
        if (!this.config) {
            await this.loadConfig();
        }
        return await mysql.createConnection(this.config);
    }

    async execute(sql, params) {
        const connection = await this.getConnection();
        try {
            //解构赋值
            const [results,] = await connection.execute(sql, params);
            return results;
        } catch (error) {
            throw error;
        } finally {
            await connection.end();
        }
    }
}

module.exports = BaseDao;