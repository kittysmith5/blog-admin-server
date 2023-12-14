const BlogDao = require("../dao/blogDao")

exports.getBlogNoText = async () => {
    //数据处理之类的操作
    const blogDao = new BlogDao()
    return await blogDao.getBlogNoText()
}