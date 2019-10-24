const express = require('express');
const router = express.Router();
const multer  = require('multer');
const uploadImage = multer({ dest: 'public/images/' });
const fs = require('fs');
let util = require('../util');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({data: 'success'});
});

router.get('/public/blogs/*', function(req, res, next) {
  let options = {
    root: __dirname.replace('/routes', ''),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
      'Content-Type': 'text/x-markdown;charset=utf-8'
    }
  };
  res.sendFile('/' + req.url, options, function (err) {
    if (err) {
      next(err);
    }
  });
});

router.get('/public/*', function(req, res, next) {
  let mimeType = 'image/jpeg';
  if(req.query.type === 'png')
    mimeType = 'image/png';
  let options = {
    root: __dirname.replace('/routes', ''),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
      'Content-Type': mimeType + ';charset=utf-8'
    }
  };
  res.sendFile('/' + req.url, options, function (err) {
    if (err) {
      next(err);
    }
  });
});

router.post('/uploadImage', uploadImage.single('image'), function(req, res) {
  let file = req.file;
  if(util.checkEmpty(file) || util.getImageExtName(file.mimetype) === '') {
    util.responseError(res, 403, util.businessErrorCode, '文件类型或内容错误');
  } else {
    let extName = util.getImageExtName(file.mimetype);
    fs.renameSync(file.path, file.path + '.' + extName);
    let resData = {
      filePath: 'http://127.0.0.1:8000/api' + '/' + file.path + '.' + extName
    };
    util.responseSuccess(res, '上传图片成功', resData);
  }
});

module.exports = router;
