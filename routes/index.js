var express = require('express');
var router = express.Router();

// let places = [
//   { name: "burger palace", address: "123 main st", rating: 4 },
//   { name: "cheese palace", address: "321 main st", rating: 2 },
//   { name: "burger house", address: "111 main st", rating: 3 },
//   { name: "veggie palace", address: "222 main st", rating: 5 }
// ]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Poop-di-Scoop'});
});




module.exports = router;
// view-locals