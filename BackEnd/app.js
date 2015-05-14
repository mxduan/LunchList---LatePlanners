var express = require('express');
var app = express();
app.use(express.bodyParser());

var path = require('path');
var lists = [
			{"Focaccia":["roger", "mike"]}
			];

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/list/*', function (req, res) {
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
  lists.push({req.body.name:[]});
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});