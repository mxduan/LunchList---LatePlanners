var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

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

  var list = _.findWhere(lists, {name: restaurantName});
  if (!list) {
  	var obj = {};
	obj.name = restaurantName;
  	obj.people = [personName];
  	lists.push(obj);
  } else {
      if (!_.contains(list.people, personName)) {
          list.people.push(personName);
      }
  }
  	res.sendStatus(200);
});

app.post('/list/:listName', function (req, res) {
    var listName = req.params.listName;
    var list = _.findWhere(lists, {name: listName});
    if (!list) {
        var obj = {};
        obj.name = req.params.listName;
        obj.people = [];
        lists.push(obj);
    }

    res.sendStatus(200);
});

app.delete('/list/:listName/:entryName', function (req, res) { //deletes a persons name
  //res.send('You want to delete who now? You're not a good person.);
  var listName = req.params.listName;
  var entryName = req.params.entryName;

  // name should be unique, so subList.length should be 1
  var subList = _.findWhere(lists, {name: listName});
  if (subList)
      subList.people = _.reject(subList.people, function(person) { return person === entryName; });

  res.sendStatus(204); //deletion complete
});

app.delete('/list/:subList', function (req, res){ //deletes an entire sublist
  var listName = req.params.subList;
  lists = _.reject(lists, function(object){return object.name === listName;});
  res.sendStatus(204);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
