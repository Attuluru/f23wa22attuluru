var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
  //var  random1 = Math.random().toFixed(2)
  var random2 = Math.random().toFixed(2)
  var y = req.query.y;
 
 
  if(y==undefined){
   
    y = random2
  }
  power = Math.pow(y,y).toFixed(2)
  truncate= Math.trunc(y)
  tanh = Math.tanh(y).toFixed(2)
  singn = Math.sign(y).toFixed(2)
  res.send(`Math.pow(${y},${y}): ${power} Math.trunc(${y}) is: ${truncate} Math.tanh(${y}) is :
  ${tanh} Math.sign(${y}) is : ${singn}`);
});
 
module.exports = router;
 