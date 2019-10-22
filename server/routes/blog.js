const express = require('express');
const blogRouter = express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'public/blogs/' });
const fs = require('fs');
const util = require('../util');
let Article = require('../models/articleModel');

blogRouter.get('/', function(req, res) {
    util.responseSuccess(res, '博文api测试成功！');
});

blogRouter.get('/getByPage', function(req, res) {
    Article.find({
            is_deleted: 0
        }, '_id create_time file_path tag category title summary', { sort: { create_time: -1 } },
    function(err, articles) {
        if(err)
            util.responseError(res);
        else if(!util.checkEmpty(articles)){
            let article_id = [];
            articles.forEach(a => article_id.push(a._id));
            Article.aggregate([
                { $unwind: '$comments' },
                { $match: {
                        '_id': { $in: article_id },
                        'comments.is_deleted': 0
                    }},
                { $sort: { 'comments.send_time': -1 } },
                { $group: {
                        _id: '$_id', sub_count: {$sum: 1}, comments: {$push: '$comments'}
                    }}
            ]).exec((err, result) => {
                if(err)
                    util.responseError(res);
                else {
                    articles.forEach(a => {
                        result.forEach(item => {
                            if(util.checkStringEqual(a._id, item._id))
                                a.comments = item.comments;
                        });
                    });
                    util.responseSuccess(res, '获取博文列表成功', articles);
                }
            })
        } else {
            util.responseSuccess(res, '获取博文列表成功', []);
        }
    });
});

blogRouter.get('/getById', function(req, res) {
    Article.findOne({
            _id: req.query.blog_id,
            is_deleted: 0
    }, '_id create_time file_path tag category title summary',
    function(err, article) {
        if(err)
            util.responseError(res);
        else if(!util.checkEmpty(article)){
            let article_id = article._id;
            Article.aggregate([
                { $match: { '_id': article_id } },
                { $unwind: '$comments' },
                { $match: { 'comments.is_deleted': 0 } },
                { $sort: { 'comments.send_time': 1 } },
                { $group: {
                        _id: '$_id',sub_count: {$sum: 1}, comments: {$push: '$comments'}
                    }}
            ]).exec((err, result) => {
                if(err)
                    util.responseError(res);
                else {
                    result.forEach(item => {
                        if(util.checkStringEqual(article._id, item._id))
                            article.comments = item.comments;
                    });
                    util.responseSuccess(res, '获取博文成功', article);
                }
            })
        } else {
            util.responseSuccess(res, '获取博文成功', {});
        }
    });
});

blogRouter.get('/getByCategory', function(req, res) {
    util.responseSuccess(res);
});

blogRouter.get('/getByTag', function(req, res) {
    util.responseSuccess(res);
});

blogRouter.post('/uploadBlog', upload.single('file'), function(req, res) {
    let file = req.file;
    if(util.checkEmpty(file) || file.mimetype !== 'text/markdown')
        util.responseError(res, 403, util.businessErrorCode, '文件类型或内容错误');
    else {
        let article = new Article();
        article.title = req.body.title;
        article.summary = req.body.summary;
        article.create_time = util.getLocalDateTime();
        article.save(function(err, result) {
            console.log(err);
            if (err)
                util.responseError(res);
            else {
                let newPath = 'public/blogs/' + result._id + '.md';
                fs.renameSync(file.path, newPath);
                Article.findOneAndUpdate(
                    { _id: result._id },
                    { file_path: newPath },
                    { new: true },
                    function(err, blog) {
                        if (err)
                            util.responseError(res);
                        else
                            util.responseSuccess(res, '博文发布成功', blog);
                    }
                );
            }
        });
    }
});

blogRouter.post('/sendBlogComment', function(req, res) {
    let blog_id = req.query.blog_id;

    let comment = {
        name: req.body.name,
        content: req.body.content,
        send_time: util.getLocalDateTime()
    };
    Article.updateOne(
    { _id: blog_id },
    { $addToSet: { comments: [comment] } },
    function(err) {
        if (err)
            util.responseError(res);
        else
            util.responseSuccess(res, '博文回复发布成功');
    });
});

blogRouter.get('/removeBlog', function(req, res) {
    util.responseSuccess(res);
});

blogRouter.get('/recoverBlog', function(req, res) {
    util.responseSuccess(res);
});

blogRouter.get('/removeComment', function(req, res) {
    util.responseSuccess(res);
});

blogRouter.get('/recoverComment', function(req, res) {
    util.responseSuccess(res);
});

blogRouter.post('/sendBlogCommentReply', function(req, res) {
    util.responseSuccess(res);
});

blogRouter.post('/editBlogCommentReply', function(req, res) {
    util.responseSuccess(res);
});

module.exports = blogRouter;