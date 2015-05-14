var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(express.static('../public'));

var path = require('path');
var lists = [
			{"Focaccia":["roger", "mike"]}
			];

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

app.get('/list', function (req, res) {
  res.json(lists);
});

// accept POST request on the homepage
/**app.post('/list/*', function (req, res) {
	var obj = JSON.parse(lists);
	obj[req.data].push(req.data);
	lists = JSON.stringify(obj);
 	res.send('Got a POST request');
});*/

app.post('/list', function (req, res) {
  var obj = {};
  obj[req.body.name] = [];
  lists.push(obj);

  res.sendStatus(200);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
