var addSublist = function(listName, success, error) {
  $.ajax({
    method: 'POST',
    url: 'list/' + listName,
    success: success,
    error: error
  });
};

var addToSublist = function(listName, entryName, success, error) {
  $.ajax({
    method: 'POST',
    url: 'list/' + listName + '/' + entryName,
    success: success,
    error: error
  });
};

var deleteSublist = function(listName, success, error) {
  $.ajax({
    method: 'DELETE',
    url: 'list/' + listName,
    success: success,
    error: error
  });
};

var deleteFromSublist = function(listName, entryName, success, error) {
  $.ajax({
    method: 'DELETE',
    url: 'list/' + listName + '/' + entryName,
    success: success,
    error: error
  });
};

var getSublist = function(listName, success, error) {
  $.ajax({
    method: 'GET',
    url: 'list/' + listName,
    success: success,
    error: error
  });
};

var getList = function(success, error) {
  $.ajax({
    method: 'GET',
    url: 'list',
    success: success,
    error: error
  });
};
