//在controller中只控制数据,不访问数据库
const userSevice = require('../service/userService');

exports.loginByUnameAndPasswd = async (req, resp) => {
    const uname = req.body.username;
    const passwd = req.body.password;
    try {
        const data = await userSevice.getUserIdByNameAndPasswd(uname, passwd)
        resp.send(data)
    } catch (error) {
        resp.status(403).send(error.message)
    }
}