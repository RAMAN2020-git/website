var express = require('express');
var router = express.Router();

const SerialPort = require('serialport');
//const Readline = require('@serialport/parser-readline')
//const port = new SerialPort('COM5', { baudRate: 115200 })

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

router.post('/submit-student-data', function (req, resZxv, next  ) {
  var name = req.body.firstName + ' ' + req.body.lastName;

  //res.send(name + ' Submitted Successfully!');

  //port.write('leftdown')

  console.log(name + 'FINISHED');
  res.redirect('/');
});
  module.exports = router;

