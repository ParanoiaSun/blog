const express = require('express');
const router = express.Router();

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

module.exports = router;
