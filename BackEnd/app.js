var express = require('express');
var bodyParser = require('body-parser');
var underscore = require('underscore');

var app = express();
app.use(bodyParser.json());
app.use(express.static('../public'));

var path = require('path');
var lists = [{ name: 'Focaccia', people: [ 'roger', 'mike' ] }];

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

app.get('/list', function (req, res) {
  res.json(lists);
});

// accept POST request on the homepage TODO
app.post('/list/*', function (req, res) {
  var obj = {};
  obj.listname = req.body.listname;
  obj.people = [];
  lists.push(obj);

  res.sendStatus(200);
});

app.post('/list', function (req, res) {
  var obj = {};
  obj.name = req.body.name;
  obj.people = [];
  lists.push(obj);

  res.sendStatus(200);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
