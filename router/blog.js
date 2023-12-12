const express = require("express")
const blogCtrler = require('../ctrler/blogCtrler.js');
const router = express.Router()

//使用中间件进行拦截以及相关操作,用next()放行
router.use((req, resp, next) => {
    next()
})

router.get("/fetch", (req, resp) => {
    blogCtrler.getBlogNoText().then(res => {
        resp.send(res)
    }).catch(err => {
        console.log(err.message);
    })
})

router.get("/fetch-text/:uuid", (req, resp) => {
    // console.log("------------");
    const uuid = req.params.uuid
    // console.log(uuid);
    blogCtrler.getBlogText(uuid).then(res => {
        // console.log(...res);
        resp.send(...res)

    }).catch(err => {
        console.log(err.message);
    })
})


router.post("/edit/:uuid", (req, resp) => {
    // console.log("------------");
    const uuid = req.params.uuid
    const data = req.body
    console.log(data);
    blogCtrler.updateBlogByUUID(uuid, data).
        then(res => {
            console.log(res);
            resp.send(res)
        }).catch(err => {
            console.log(err.message);
        })
})


router.delete("/del/:uuid", (req, resp) => {
    const uuid = req.params.uuid
    console.log(uuid);
    blogCtrler.delBlogByUUID(uuid).
        then(res => {
            console.log(res);
            resp.send(res)
        }).catch(err => {
            console.log(err.message);
        })
})

module.exports = router