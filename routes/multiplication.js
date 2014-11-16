var express = require('express');
var router = express.Router();

/* GET simple. */
router.get('/', function(req, res) {
  res.render('multiplication', { title: 'Multiplication' });
});

module.exports = router;
