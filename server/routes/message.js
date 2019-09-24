let express = require('express');
let messageRouter = express.Router();
let messageService = require('../service/messageService.js');

messageRouter.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' })
});

// messageRouter.post('/add', messageService.addMessages);

// ('/send', function(req, res, next) {
//     messageService.addMessages(req.body.name, req.body.content);
//     res.json({
//         message: 'success'
//     });
// });

module.exports = messageRouter;