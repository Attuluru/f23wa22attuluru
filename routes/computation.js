var express = require('express');
var router = express.Router();
var ran1 = Math.random()*100;
var ran2 = Math.random()*200;
var v3 = 0;
var v4 = 0;
var v5 = 0;

router.get('/', function(req, res, next) {
    v3 = Math.tanh(ran1);
    v4 = Math.tanh(ran2);
    v5 = Math.tanh(ran1);

    res.render(`random values are ${ran1} and ${ran2} tan values are ${ran1} and ${v3}  ${ran2} and ${v4}, ${ran1} is ${v5}`);
  });
  
  module.exports = router;
  