const express = require('express');
const messageRouter = express.Router();
const mongoose = require('mongoose');
let util = require('../util');
let Message = require('../models/messageModel.js');

messageRouter.get('/', function(req, res, next) {
    res.send(util.responseSuccess(res, '留言api测试成功！'));
});

messageRouter.get('/getByPage', function(req, res, next) {
    Message.find({
        is_deleted: 0
    }, '_id send_time name content', { sort: { send_time: -1 } },
    function(err, message) {
        if(err)
            res.send(util.responseError(res));
        else if(!util.checkEmpty(message)){
            let message_id = [];
            message.forEach(m => message_id.push(m._id));
            Message.aggregate([
                { $unwind: '$sub_message' },
                { $match: {
                    '_id': { $in: message_id },
                    'sub_message.is_deleted': 0
                }},
                { $sort: { 'sub_message.send_time': 1 } },
                { $group: {
                    _id: '$_id',sub_count: {$sum: 1}, sub_message: {$push: '$sub_message'}
                }}
            ]).exec((err, result) => {
                if(err)
                    res.send(util.responseError(res));
                else {
                    message.forEach(m => {
                        result.forEach(item => {
                            if(util.checkStringEqual(m._id, item._id))
                                m.sub_message = item.sub_message;
                        });
                    });
                    res.send(util.responseSuccess(res, '获取留言列表成功', message));
                }
            })
        } else {
            res.send(util.responseSuccess(res, '获取留言列表成功', []));
        }
    });
});

messageRouter.get('/getById', function(req, res, next) {
    Message.findOne({
        _id: req.query.message_id,
        is_deleted: 0
    }, '_id send_time name content',
    function(err, message) {
        if(err)
            res.send(util.responseError(res));
        else if(!util.checkEmpty(message)){
            let message_id = message._id;
            Message.aggregate([
                { $match: { '_id': message_id } },
                { $unwind: '$sub_message' },
                { $match: { 'sub_message.is_deleted': 0 } },
                { $sort: { 'sub_message.send_time': 1 } },
                { $group: {
                    _id: '$_id',sub_count: {$sum: 1}, sub_message: {$push: '$sub_message'}
                }}
            ]).exec((err, result) => {
                if(err)
                    res.send(util.responseError(res));
                else {
                    result.forEach(item => {
                        if(util.checkStringEqual(message._id, item._id))
                            message.sub_message = item.sub_message;
                    });
                    res.send(util.responseSuccess(res, '获取留言表成功', message));
                }
            })
        } else {
            res.send(util.responseSuccess(res, '获取留言表成功', {}));
        }
    });
});

messageRouter.get('/getSubMessageById', function(req, res, next) {
    Message.aggregate([
        { $match : { '_id': mongoose.Types.ObjectId(req.query.message_id) } },
        { $unwind: '$sub_message' },
        { $match: {
                'sub_message.is_deleted': 0
            }},
        { $sort: { 'sub_message.send_time': 1 } },
        { $group: {
                _id: '$_id',sub_count: {$sum: 1}, sub_message: {$push: '$sub_message'}
        }}
    ]).exec((err, result) => {
        console.log(result);
        if(err)
            res.send(util.responseError(res));
        else {
            res.send(util.responseSuccess(res, '获取留言表成功', result));
        }
    });
});

messageRouter.post('/addMessage', function(req, res) {
    let message = new Message();
    message.name = req.body.name;
    message.content = req.body.content;
    message.send_time = util.getLocalDateTime();
    message.save(function(err) {
        if (err)
            res.send(util.responseError(res));
        else
            res.send(util.responseSuccess(res, '留言发布成功'));
    });
});

messageRouter.post('/addSubMessage', function(req, res) {
    let message_id = req.query.message_id;

    let sub_message = {
        name: req.body.name,
        content: req.body.content,
        send_time: util.getLocalDateTime()
    };
    Message.updateOne(
        { _id: message_id },
        { $addToSet: { sub_message: [sub_message] } },
        function(err) {
            if (err)
                res.send(util.responseError(res));
            else
                res.send(util.responseSuccess(res, '留言回复发布成功'));
    });
});

module.exports = messageRouter;