var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie("Hello","World");
  consol.log(req.cookies);
  res.render('index', { title: 'Blog' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login - TiL' });
});

router.post('/login', function(req,res,next){
  res.render('login', { title: 'Login - TIL'});
});

module.exports = router;
