var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('running on port 3000');
  res.render('index', { title: 'Welcome to iHatch' });
});

module.exports = router;
