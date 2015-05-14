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

app.get('/list/:listName', function (req, res) {
  var listName = req.params.listName;
  res.json(lists.listName);
});

// accept POST request on the homepage
app.post('/list/:listName/:entryName', function (req, res) {
  var personName = req.params.entryName;
  var restaurantName = req.params.listName;
  var restaurants = _.pluck(lists, 'name');
  var restaurantLocationInList = _.indexOf(restaurants, restaurantName);		
  if(restaurantLocationInList === -1 )
  {
  	var obj = {};
	obj.name = restaurantName;
  	obj.people = [personName];
  	lists.push(obj);
  	res.sendStatus(200);
  	return;
  }

  lists[restaurantLocationInList].people.push(personName);
  res.sendStatus(200);
});

app.post('/list/:entryName', function (req, res) {
  var obj = {};
  obj.name = req.params.entryName;
  obj.people = [];
  lists.push(obj);

  res.sendStatus(200);
});

app.delete('/list/:listName/:entryName', function (req, res) { //deletes a persons name
  //res.send('You want to delete who now? You're not a good person.);
  var listName = req.params.listName;
  var entryName = req.params.entryName;
  var listNames = _.pluck(lists, 'name');
  var listNameIndexInLists = _.indexOf(lists, listName);		
  if(restaurantLocationInList !== -1 )
  {
  	 lists[listNameIndexInLists].people.splice(_.indexOf(lists[listNameIndexInLists].people, entryName),-1); //TODO more error checking
  }
  res.sendStatus(204); //deletion complete
});

app.delete('/list/:subList', functions (req, res){ //deletes an entire sublist
  res.sendStatus(204);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
