var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
  res.send("HNNNNGGGGGGGGHHHH BRAINZZZZ");
})

router.post("/", function(req, res, next) {
  // add something to a database
  // write a file
  // waste a lot of time doing nothing
  console.log(req.body);
  res.send("HNNGGGGHGHGHGHGHHGH " + req.body.belugawhales)
})
module.exports = router;
