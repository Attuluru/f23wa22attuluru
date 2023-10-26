var express = require('express');
var router = express.Router();
var ran1 = Math.random()*100;
var ran2 = Math.random()*200;
var v1 = 0;
var v2 = 0;
var v3 = 0;

router.get('/', function(req, res, next) {

    v1 = Math.tanh(ran1);
    v2 = Math.tanh(ran2);
    v3 = Math.tanh(ran1);

    res.render(`random values are ${ran1} and ${ran2} tanh values are ${ran1} and ${v1}  ${ran2} and ${v2}, ${ran1} is ${v3}`);
  });
  
  module.exports = router;
  