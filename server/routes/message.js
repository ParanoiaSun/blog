let express = require('express');
let messageRouter = express.Router();

messageRouter.get('/', function(req, res, next) {
    res.json({data: 'message success'});
});

messageRouter.get('/getByPage', function(req, res, next) {
    res.json({data: 'message success'});
});

messageRouter.get('/getById', function(req, res, next) {
    res.json({data: 'message success'});
});

// messageRouter.post('/add', messageService.addMessages);

// ('/send', function(req, res, next) {
//     messageService.addMessages(req.body.name, req.body.content);
//     res.json({
//         message: 'success'
//     });
// });

module.exports = messageRouter;