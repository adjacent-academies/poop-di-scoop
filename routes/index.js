var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hi there");
  
  res.render('index', { title: 'My Bathroom Mapper' });
});


module.exports = router;
