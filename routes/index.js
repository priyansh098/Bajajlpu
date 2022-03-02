var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Express Api , by Priyansh Gupta' });
});

module.exports = router;
