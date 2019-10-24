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
const port = 8000 || process.env.PORT;

// 转发服务端api请求
// const targetUrl = `http://${config.apiHost}:${config.apiPort}`;
// const proxy = httpProxy.createProxyServer({
//   target:targetUrl
// });

app.use('/api',(req,res)=>{
  proxy.web(req,res,{target:targetUrl})
});

const targetUrl = `http://127.0.0.1:${port}`;
const proxy = httpProxy.createProxyServer({
  target:targetUrl
});

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS,PATCH');
  res.header('Content-Type', 'application/json;charset=utf-8');
  res.header('Cache-Control', 'no-cache');
  next();
});

mongoose.connect('mongodb://localhost:27017/nampo', { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
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

mongoose.set('useFindAndModify', false);

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

app.use('/', indexRouter);
app.use('/blog', blogRouter);
app.use('/message', messageRouter);
app.use('/photo', photoRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

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
