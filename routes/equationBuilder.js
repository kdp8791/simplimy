var express = require('express');
var router = express.Router();

/* GET simple. */
router.get('/', function(req, res) {
  res.render('equationBuilder', { title: 'Equation Builder' });
});

module.exports = router;
