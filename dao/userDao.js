const BaseDao = require('./baseDao');


class UserDao extends BaseDao {
    async getUserIdByNameAndPasswd(uname, pswd) {
        return await this.execute(
            'SELECT id FROM `users_table` where username = ? and password = ? limit 1',
            [uname, pswd]
        )
    }
}
module.exports = UserDao