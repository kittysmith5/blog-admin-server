//在controller中只控制数据,不访问数据库
const blogService = require('../service/blogService');
const userDao = require('../dao/userDao');

exports.getBlogNoText = async (req, res, next) => {
    try {
        const bloginfos = await blogService.getBlogNoText();
        res.json(bloginfos);
    } catch (error) {
        next(error);
    }
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