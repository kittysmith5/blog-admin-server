const loggerMiddleware = require('./logger/logger');


const applyMiddlewares = (app) => {
    app.use(loggerMiddleware);
    // 你可以在这里添加更多的中间件
};

module.exports = applyMiddlewares;
