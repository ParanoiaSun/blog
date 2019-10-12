const express = require('express');
const photoRouter = express.Router();
const Album = require('../models/albumModel.js');
const multer  = require('multer');
const uploadAlbum = multer({ dest: 'public/albums/' });
const uploadPhoto = multer({ dest: 'public/photos/' });
const fs = require('fs');
let util = require('../util');

photoRouter.get('/', function(req, res) {
    res.send(util.responseSuccess(res));
});

photoRouter.get('/getAlbumList', function(req, res) {
    Album.find({
            is_deleted: 0
        }, '_id cover create_time photos name', { sort: { create_time: -1 } },
    function(err, albums) {
        if(err)
            res.send(util.responseError(res));
        else if(!util.checkEmpty(albums)){
            let album_id = [];
            albums.forEach(a => album_id.push(a._id));
            Album.aggregate([
                { $unwind: '$photos' },
                { $match: {
                        '_id': { $in: album_id },
                        'photos.is_deleted': 0
                    }},
                { $sort: { 'photos.create_time': -1 } },
                { $group: {
                        _id: '$_id', sub_count: {$sum: 1}, photos: {$push: '$photos'}
                    }}
            ]).exec((err, result) => {
                if(err)
                    res.send(util.responseError(res));
                else {
                    albums.forEach(a => {
                        result.forEach(item => {
                            if(util.checkStringEqual(a._id, item._id))
                                a.photos = item.photos;
                        });
                    });
                    res.send(util.responseSuccess(res, '获取相册列表成功', albums));
                }
            })
        } else {
            res.send(util.responseSuccess(res, '获取相册列表成功', []));
        }
    });
});

photoRouter.get('/getByAlbumId', function(req, res) {
    Album.findOne({
            _id: req.query.album_id,
            is_deleted: 0
        }, '_id cover create_time photos name',
    function(err, album) {
        if(err)
            res.send(util.responseError(res));
        else if(!util.checkEmpty(album)){
            let album_id = album._id;
            Album.aggregate([
                { $match: { '_id': album_id } },
                { $unwind: '$photos' },
                { $match: { 'photos.is_deleted': 0 } },
                { $sort: { 'photos.create_time': 1 } },
                { $group: {
                        _id: '$_id',sub_count: {$sum: 1}, photos: {$push: '$photos'}
                    }}
            ]).exec((err, result) => {
                if(err)
                    res.send(util.responseError(res));
                else {
                    result.forEach(item => {
                        if(util.checkStringEqual(album._id, item._id))
                            album.photos = item.photos;
                    });
                    res.send(util.responseSuccess(res, '获取相册成功', album));
                }
            })
        } else {
            res.send(util.responseSuccess(res, '获取相册成功', {}));
        }
    });
});

photoRouter.get('/getByPhotoId', function(req, res) {
    Album.findOne(
        { _id: req.query.album_id },
        function(err, album) {
            if (err)
                res.send(util.responseError(res));
            else {
                let photo = album.photos.id(req.query.photo_id);
                if (util.checkEmpty(photo))
                    res.send(util.responseSuccess(res, '获取照片成功', {}));
                else
                    res.send(util.responseSuccess(res, '获取照片成功', photo));
            }
        }
    );
});

photoRouter.post('/createAlbum', uploadAlbum.single('cover'), function(req, res) {
    let file = req.file;
    if(util.checkEmpty(file) || util.getImageExtName(file.mimetype) === '') {
        res.send(util.responseError(res, 403, util.businessErrorCode, '文件类型或内容错误'));
    } else {
        let extName = util.getImageExtName(file.mimetype);
        let album = new Album();
        album.name = req.body.name;
        album.create_time = util.getLocalDateTime();
        album.save(function (err, result) {
            console.log(err);
            if (err)
                res.send(util.responseError(res));
            else {
                let newPath = 'public/albums/' + result._id + '.' + extName;
                fs.renameSync(file.path, newPath);
                Album.findOneAndUpdate(
                    {_id: result._id},
                    {cover: newPath},
                    {new: true},
                    function (err, album) {
                        if (err)
                            res.send(util.responseError(res));
                        else
                            res.send(util.responseSuccess(res, '创建相册成功', album));
                    }
                );
            }
        });
    }
});

photoRouter.post('/uploadPhoto', uploadPhoto.single('photo'), function(req, res) {
    let file = req.file;
    if(util.checkEmpty(file) || util.getImageExtName(file.mimetype) === '') {
        res.send(util.responseError(res, 403, util.businessErrorCode, '文件类型或内容错误'));
    } else {
        let extName = util.getImageExtName(file.mimetype);
        fs.renameSync(file.path, file.path + '.' + extName);
        let photo = {
            description: req.body.description,
            create_time: util.getLocalDateTime(),
            img: file.path + '.' + extName
        };
        Album.updateOne(
        { _id: req.query.album_id },
        { $addToSet: { photos: [photo] } },
        function(err) {
            console.log(err);
            if (err)
                res.send(util.responseError(res));
            else {
                res.send(util.responseSuccess(res, '照片上传成功'));
            }
        });
    }
});

module.exports = photoRouter;