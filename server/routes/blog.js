const express = require('express');
const blogRouter = express.Router();

blogRouter.get('/', function(req, res) {
    res.json({data: 'blog success'});
});

blogRouter.get('/getByPage', function(req, res) {
    res.json({data: 'blog success'});
});

blogRouter.get('/getById', function(req, res) {
    res.json({data: 'blog success'});
});

blogRouter.post('/uploadBlog', function(req, res) {
    res.json({data: 'blog success'});
});

module.exports = blogRouter;