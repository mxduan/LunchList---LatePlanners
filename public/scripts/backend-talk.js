var addSublist = function(listName, success, error) {
  $.ajax({
    method: 'POST',
    url: '/list/',
    data: {
      name: listName
    },
    success: success,
    error: error
  });
};

var addToList = function(listId, entryName, success, error) {
  $.ajax({
    method: 'POST',
    url: 'list/' + listId,
    data: {
      name: entryName
    },
    success: sucess,
    error: error
  });
};

var getList = function(success, error) {
  $.ajax({
    method: 'GET',
    url: '/list',
    success: success,
    error: error
  });
};
