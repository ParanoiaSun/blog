const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const connectHistoryApiFallback = require('connect-history-api-fallback');
const session = require('express-session');
const httpProxy = require('http-proxy');

const indexRouter = require('./routes/index');
const blogRouter = require('./routes/blog');
const messageRouter = require('./routes/message');
const photoRouter = require('./routes/photo');

const app = express();
const port = process.env.PORT || 8000;

// 转发服务端api请求
// const targetUrl = `http://${config.apiHost}:${config.apiPort}`;
// const proxy = httpProxy.createProxyServer({
//   target:targetUrl
// });

mongoose.connect('mongodb://localhost:27017/nampo', function (err) {
  if (err) {
    console.log(err, "数据库连接失败");
    return;
  }
  console.log('数据库连接成功');
  app.listen(port, function (err) {
    if (err) {
      console.error('err:', err);
    } else {
      console.info(`===> api server is running at localhost:27017`)
    }
  });
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('express_react_cookie'));
app.use(session({
  secret:'express_react_cookie',
  resave: true,
  saveUninitialized:true,
  cookie: {maxAge: 60 * 1000 * 30}//过期时间
}));

app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', connectHistoryApiFallback()); //处理前端路由

app.use('/api', indexRouter);
app.use('/api/blog', blogRouter);
app.use('/api/message', messageRouter);
app.use('/api/photo', photoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

module.exports = app;
