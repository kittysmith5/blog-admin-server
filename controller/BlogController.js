//在controller中只控制数据,不访问数据库
const BlogService = require('../service/BlogService');

class BlogController {
    constructor() {
        this.blogService = new BlogService();
    }

    //在 JavaScript 中，函数的 this 关键字的值取决于函数是如何被调用的，而不是如何被定义的。
    // 这个问题在类方法或对象方法中尤为常见，特别是当你将方法作为回调函数传递时。
    getBlogNoText = async (req, res, next) => {
        try {
            const blogInfos = await this.blogService.getBlogNoText();
            res.json(blogInfos);
        } catch (error) {
            next(error);
        }
    }

    getBlogByUUID = async (req, res, next) => {
        try {
            const uuid = req.params.uuid
            console.log("uuid:", uuid)
            const blogInfos = await this.blogService.getBlogTextByUUID(uuid);
            res.json(blogInfos);
        } catch (error) {
            next(error);
        }
    }

    editBlogByUUID = async (req, res, next) => {
        try {
            const uuid = req.params.uuid
            const newUUID = req.body.newUUID
            const title = req.body.title
            const mdText = req.body.mdText

            const blogInfos = await this.blogService.editBlogByUUID(uuid, newUUID, title, mdText);
            res.json(blogInfos);
        } catch (error) {
            next(error);
        }
    }

    delBlogByUUID = async (req, res, next) => {
        try {
            const uuid = req.params.uuid
            const blogInfos = await this.blogService.delBlogByUUID(uuid);
            res.json(blogInfos);
        } catch (error) {
            next(error);
        }
    }

}

module.exports = BlogController