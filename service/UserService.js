const jwt = require("jsonwebtoken")

const UserDao = require("../dao/UserDao")
const sha256 = require('../tools/sha256');

class UserService {
    #SALT = "askdhf25434!@jls"
    #SECRET_STR = "hello"

    constructor() {
        this.userDao = new UserDao()
    }

    async getUserIdByNameAndPasswd(uname, passwd) {
        const insertPswd = sha256.do(passwd + this.#SALT);
        const res = await this.userDao.getUserIdByNameAndPasswd(uname, insertPswd)
        if (res.length > 0) {
            const token = jwt.sign({username: uname}, this.#SECRET_STR, {
                // 默认为s  字符串"1"是1ms
                expiresIn: 30 * 60
            })
            const retObj = {
                token,
            }
            return JSON.stringify(retObj)
        } else {
            throw new Error("username or password is wrong!");
        }
    }
}

module.exports = UserService;