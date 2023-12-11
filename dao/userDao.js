const { db } = require('./baseDao.js')

exports.getUserIdByNameAndPasswd = async (uname,pswd) => {
    const data = await db(
        'SELECT id FROM `users_table` where username = ? and password = ? limit 1',
        [uname,pswd]
    )
    // console.log(data);
    return data
}