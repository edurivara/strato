var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Functions
router.post('/functions/print', function(req, res, next) {
  var text = req.body.text
  res.send(text);
});

module.exports = router;
