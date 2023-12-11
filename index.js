const path = require('node:path');
const jwt = require("jsonwebtoken")

const express = require('express');

const app = express();
const sha256 = require('./tools/sha256.js');
const userCtrler = require('./ctrler/userCtrler.js');
const SECRET_STR = "hello"
const SALT = "askdhf25434!@jls"

const blogRoute = require("./router/blog.js")



// 解析post 的body
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());
//全局前置中间件
app.use((req, resp, next) => {
    resp.set('Access-Control-Allow-Origin', '*')
    // resp.set('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH')
    console.log(req.url);
    next()
})

//使用路由并指定网址前缀
app.use("/blog", blogRoute)
app.post("/login", (req, resp) => {
    const uname = req.body.username;
    const passwd = req.body.password;
    const insertPswd = sha256.do(passwd + SALT);
    userCtrler.getUserIdByNameAndPasswd(uname, insertPswd).
    then(res=>{
        if (res.length > 0) {
            console.log("登录成功");
            const token = jwt.sign({ username: uname }, SECRET_STR, {
                // 默认为s  字符串"1"是1ms
                expiresIn: 30 * 60
            })
            const retObj = {
                token,
            }
            resp.send(JSON.stringify(retObj))
        }else{
            resp.status(403).send("登录失败")
        }
    }).
    catch(err => {
        console.log(err);
    })
})


app.listen(3000, () => {
    console.log('服务器已启动，监听端口 3000');
});