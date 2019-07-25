var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/chicken', function(req, res, next) {
  res.render('chicken');
});


module.exports = router;
