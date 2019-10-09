const express = require('express');
const photoRouter = express.Router();

photoRouter.get('/', function(req, res) {
    res.json({data: 'photo success'});
});

photoRouter.get('/getAlbumList', function(req, res) {
    res.json({data: 'photo success'});
});

photoRouter.get('/getByAlbumId', function(req, res) {
    res.json({data: 'photo success'});
});

photoRouter.get('/getByPhotoId', function(req, res) {
    res.json({data: 'photo success'});
});

module.exports = photoRouter;