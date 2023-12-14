const jwt = require("jsonwebtoken")

const UserDao = require("../dao/userDao")
const sha256 = require('../tools/sha256');

const SALT = "askdhf25434!@jls"
const SECRET_STR = "hello"
exports.getUserIdByNameAndPasswd = async (uname, passwd) => {
    const userDao = new UserDao()
    //数据处理之类的操作

    const insertPswd = sha256.do(passwd + SALT);

    const res = await userDao.getUserIdByNameAndPasswd(uname, insertPswd)
    if (res.length > 0) {
        const token = jwt.sign({ username: uname }, SECRET_STR, {
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