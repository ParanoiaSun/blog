const express = require('express');
const blogRouter = express.Router();
let util = require('../util');

blogRouter.get('/', function(req, res) {
    res.send(util.responseSuccess(res));
});

blogRouter.get('/getByPage', function(req, res) {
    res.send(util.responseSuccess(res));
});

blogRouter.get('/getById', function(req, res) {
    res.send(util.responseSuccess(res));
});

blogRouter.post('/uploadBlog', function(req, res) {
    res.send(util.responseSuccess(res));
});

module.exports = blogRouter;