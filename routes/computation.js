var express = require('express');
var router = express.Router();
var v1 = Math.random()*10;
var v2 = Math.random()*20;
var v3 = 0;
var v4 = 0;
var v5 = 0;

router.get('/', function(req, res, next) {
    v3 = Math.tanh(v1);
    v4 = Math.tanh(v2);
    v5 = Math.tanh(v1);

    res.render(`random values are ${v1} and ${v2} tan values are ${v1} and ${v3}  ${v2} and ${v4}, ${v5} is ${v1}`);
  });
  
  module.exports = router;
  