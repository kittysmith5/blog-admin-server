const { db } = require('./baseDao.js')

exports.getBlogNoText = async () => {
    const data = await db(
        "SELECT uuid, title, date \
        FROM `table_blog`\
        WHERE deleted = 0",
        []
    )
    return data
}


exports.getBlogText = async (uuid) => {
    const data = await db(
        "SELECT md_text \
        FROM `table_blog`\
        WHERE uuid = ?;",
        [uuid]
    )
    return data
}

exports.updateBlogByUUID = async (uuid, newUUID, title, mdText) => {
    const data = await db(
        "UPDATE `table_blog` \
        SET uuid = ?,\
            title = ?,\
            `md_text` = ?\
        WHERE uuid = ?;",
        [newUUID, title, mdText, uuid]
    )
    return data
}


exports.delBlogByUUID = async uuid => {
    const data = await db(
        "UPDATE `table_blog` \
        SET deleted = 1\
        WHERE uuid = ?;",
        [uuid]
    )
    return data
}