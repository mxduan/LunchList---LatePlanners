
var renderList = function(listBox, list) {
  $.ajax({
    method: 'GET',
    url: 'templates/listItem.html',
  success: function(templateSource) {
    var template = Handlebars.compile(templateSource);

    _.each(list, function(entry)
      {
       listBox.append(template(entry));
      });

  }});
};
