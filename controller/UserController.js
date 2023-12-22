//在controller中只控制数据,不访问数据库
const UserService = require('../service/UserService');

class UserController {
    constructor() {
        this.userService = new UserService()
    }

    loginByUnameAndPasswd = async (req, resp)=> {
        const uname = req.body.username;
        const passwd = req.body.password;
        try {
            const data = await this.userService.getUserIdByNameAndPasswd(uname, passwd)
            resp.send(data)
        } catch (error) {
            resp.status(403).send(error.message)
        }
    }
}

module.exports = UserController