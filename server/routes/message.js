let express = require('express');
let messageRouter = express.Router();
let util = require('../util');
let Message = require('../models/messageModel.js');

messageRouter.get('/', function(req, res, next) {
    res.send(util.responseSuccess(res, '留言api测试成功！'));
});

messageRouter.get('/getByPage', function(req, res, next) {
    res.send(util.responseSuccess(res));
});

messageRouter.get('/getById', function(req, res, next) {
    res.send(util.responseSuccess(res));
});

messageRouter.post('/addMessage', function(req, res) {
    let message = new Message();
    message.name = req.body.name;
    message.content = req.body.content;
    message.save(function(err) {
        if (err)
            res.send(util.responseError());
        res.send(util.responseSuccess(res, '留言发布成功！'));
    });
});

messageRouter.post('/addSubMessage', function(req, res) {
    res.send(util.responseSuccess(res));
});

module.exports = messageRouter;