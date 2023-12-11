//在controller中只控制数据,不访问数据库
const userDao = require('../dao/userDao');

exports.getUserIdByNameAndPasswd = async (uname,pswd) => {
    const data = await userDao.getUserIdByNameAndPasswd(uname,pswd);
    // console.log(data);
    return data;
}

exports.getAll = async () => {
    const data = await homeDao.getAll();
    return data;
}