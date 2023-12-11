//在controller中只控制数据,不访问数据库
const userDao = require('../dao/blogDao');

exports.getBlogNoText = async () => {
    const data = await userDao.getBlogNoText();
    return data;
}


exports.getBlogText = async (uuid) => {
    const data = await userDao.getBlogText(uuid);
    return data;
}

exports.updateBlogByUUID = async (uuid, blog) => {
    const newUUID = blog.newUUID
    const title = blog.title
    const mdText = blog.mdText
    const data = await userDao.updateBlogByUUID(uuid, newUUID, title, mdText);
    return data;
}

exports.delBlogByUUID  = async (uuid) => {
    const data = await userDao.delBlogByUUID(uuid);
    return data;
}