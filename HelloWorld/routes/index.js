var express = require('express');
var router = express.Router();

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('COM4', { baudRate: 115200 })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'wasdwasd' });
});

router.post('/submit-teacher-data', function (req, res) {
  var name = req.body.firstName + ' ' + req.body.lastName;

  //res.send(name + ' Submitted Successfully!');

//port.write('leftup')

  console.log(name + 'done!!!');
  res.redirect('/');

});
router.post('/submit-left', function (req, res) {
  var name = req.body.firstName + ' ' + req.body.lastName;

  //res.send(name + ' Submitted Successfully!');

  port.write('left\n')

  console.log('left');
  res.redirect('/');
});

router.post('/submit-right', function (req, res) {
  var name = req.body.firstName + ' ' + req.body.lastName;

  //res.send(name + ' Submitted Successfully!');

  port.write('right')

  console.log('right');
  res.redirect('/');
});

router.post('/submit-up', function (req, res) {
  var name = req.body.firstName + ' ' + req.body.lastName;

  //res.send(name + ' Submitted Successfully!');

  port.write('up')

  console.log('close');
  res.redirect('/');
});

router.post('/submit-down', function (req, res) {
  var name = req.body.firstName + ' ' + req.body.lastName;

  //res.send(name + ' Submitted Successfully!');

port.write('down')

  console.log('open');
  res.redirect('/');
});
module.exports = router;

