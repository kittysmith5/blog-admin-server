const BlogDao = require("../dao/BlogDao")

class BlogService {
    constructor() {
        this.blogDao = new BlogDao();
    }

    async getBlogNoText() {
        // 数据处理之类的操作
        return await this.blogDao.getBlogNoText();
    }

    async getBlogTextByUUID(uuid) {
        return await this.blogDao.getBlogTextByUUID(uuid);
    }

    async editBlogByUUID(uuid, newUUID, title, mdText) {
        return await this.blogDao.editBlogByUUID(uuid, newUUID, title, mdText);
    }

    async delBlogByUUID(uuid) {
        return await this.blogDao.delBlogByUUID(uuid);
    }

}

module.exports = BlogService;