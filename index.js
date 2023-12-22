const express = require('express');

const applyMiddlewares  = require("./middleware")
const router = require("./router")

const app = express();
// 解析post 的body
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());

// 应用中间件
applyMiddlewares(app);

//使用路由
app.use(router)

app.listen(3000, () => {
    console.log('服务器已启动，监听端口 3000');
});