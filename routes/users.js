var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  // res.redirect('http://example.com');
});

/* GET users listing. */
router.get('/error', function(req, res, next) {
  res.render('error', { message: '错误信息',error: {status: 'ready', stack: 'stack stack'} });
});

module.exports = router;
