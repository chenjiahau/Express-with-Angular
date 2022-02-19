var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Text mode' });
});

router.get('/express-test', function(req, res, next) {
  res.send({ message: 'Your express is connected to react!' });
});

router.get('/api/blockuser', function(req, res, next) {
  res.send({
    list: [
      'K'
    ]
  });
});

router.get('/api/questionnaire', function (req, res, next) {
  res.send({
    list: [
      {
        email: "test@test.com",
        firstname: 'A',
        lastname: 'B',
        gender: 'Male',
        age: 'Child',
        aboutyou: ''
      }
    ]
  });
});

router.post('/api/questionnaire', function (req, res, next) {
  res.send({
    message: "Got it!"
  });
  // res.status(400).send({
  //   message: "Something wrong!"
  // });
});

module.exports = router;
