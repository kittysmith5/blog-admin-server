const express = require("express")
const UserController = require('../../controller/UserController')
const router = express.Router()
const userController = new UserController()
//使用中间件进行拦截以及相关操作,用next()放行
router.use((req, resp, next) => {
    next()
})

router.post("/login",userController.loginByUnameAndPasswd)

module.exports = router
