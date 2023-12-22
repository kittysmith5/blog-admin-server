const express = require("express")
const BlogController = require('../../controller/BlogController');
const router = express.Router()

const blogController = new BlogController()
//使用中间件进行拦截以及相关操作,用next()放行
router.use((req, resp, next) => {
    next()
})

router.get("/fetch", blogController.getBlogNoText)

router.get("/fetch-text/:uuid", blogController.getBlogByUUID)

router.post("/edit/:uuid", blogController.editBlogByUUID)

router.delete("/del/:uuid", blogController.delBlogByUUID)


module.exports = router