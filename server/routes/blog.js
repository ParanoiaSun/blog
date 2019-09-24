const express = require('express');
const blogRouter = express.Router();

blogRouter.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' })
});

module.exports = blogRouter;