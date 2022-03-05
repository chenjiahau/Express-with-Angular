var express = require('express');
var router = express.Router();

const list = [
  {
    id: 1,
    email: "test1@test.com",
    firstname: 'A',
    lastname: 'B',
    gender: 'Male',
    age: 'Child',
    aboutyou: ''
  },
  {
    id: 2,
    email: "test2@test.com",
    firstname: 'AA',
    lastname: 'BB',
    gender: 'Male',
    age: 'Young',
    aboutyou: ''
  }
];

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
    list
  });
});

router.post('/api/questionnaire', function (req, res, next) {
  list.push({
    id: list.length + 1,
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    gender: req.body.gender,
    age: req.body.age,
    aboutyou: req.body.aboutyou
  });

  res.send({
    message: "Got it!"
  });
  // res.status(400).send({
  //   message: "Something wrong!"
  // });
});

module.exports = router;
