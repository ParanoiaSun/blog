let express = require('express');
let messageRouter = express.Router();
let util = require('../util');

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
    res.send(util.responseSuccess(res));
});

messageRouter.post('/addSubMessage', function(req, res) {
    res.send(util.responseSuccess(res));
});

// messageRouter.post('/add', messageService.addMessages);

// ('/send', function(req, res, next) {
//     messageService.addMessages(req.body.name, req.body.content);
//     res.json({
//         message: 'success'
//     });
// });

module.exports = messageRouter;