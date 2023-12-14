const path = require('node:path');

const express = require('express');

const blogRoutes = require("./router/blogRoutes")
const userRoutes = require("./router/userRoutes")

const app = express();
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
app.use("/blog", blogRoutes)
app.use("/user", userRoutes)
// app.post("/login", )


app.listen(3000, () => {
    console.log('服务器已启动，监听端口 3000');
});