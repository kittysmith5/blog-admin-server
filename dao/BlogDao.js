const BaseDao = require('./BaseDao');

class BlogDao extends BaseDao {
    async getBlogNoText() {
        return await this.execute(
            "SELECT uuid, title, date \
            FROM `table_blog`\
            WHERE deleted = 0",
            []
        );
    }

    async getBlogTextByUUID(uuid) {
        return await this.execute(
            "SELECT md_text \
            FROM `table_blog`\
            WHERE uuid = ?;",
            [uuid]
        );
    }

    async editBlogByUUID(uuid, newUUID, title, mdText) {
        return await this.execute(
            "UPDATE `table_blog` \
            SET uuid = ?,\
                title = ?,\
                `md_text` = ?\
            WHERE uuid = ?;",
            [newUUID, title, mdText, uuid]
        );
    }

    async delBlogByUUID(uuid) {
        return await this.execute(
            "UPDATE `table_blog` \
            SET deleted = 1\
            WHERE uuid = ?;",
            [uuid]
        );
    }
}

module.exports = BlogDao