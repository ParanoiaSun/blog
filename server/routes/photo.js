const express = require('express');
const photoRouter = express.Router();
let util = require('../util');

photoRouter.get('/', function(req, res) {
    res.send(util.responseSuccess(res));
});

photoRouter.get('/getAlbumList', function(req, res) {
    res.send(util.responseSuccess(res));
});

photoRouter.get('/getByAlbumId', function(req, res) {
    res.send(util.responseSuccess(res));
});

photoRouter.get('/getByPhotoId', function(req, res) {
    res.send(util.responseSuccess(res));
});

photoRouter.post('/createAlbum', function(req, res) {
    res.send(util.responseSuccess(res));
});

photoRouter.post('/uploadPhoto', function(req, res) {
    res.send(util.responseSuccess(res));
});

module.exports = photoRouter;