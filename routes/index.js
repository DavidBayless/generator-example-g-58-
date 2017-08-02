var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ZOOOOMBIES' });
});

router.get("/:name", function(req, res, next) {
  res.render('index', { title: billymaysify(req.params.name)})
})

function billymaysify(str) {
  return str.toUpperCase() + "!!!";
}

module.exports = router;
