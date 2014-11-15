var express = require('express');
var router = express.Router();

/* GET simple. */
router.get('/', function(req, res) {
  res.render('simple', { title: 'Simple' });
});

module.exports = router;
