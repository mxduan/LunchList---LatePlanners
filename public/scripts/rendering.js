var renderList = function(listBox, list, fetchAndLoad) {
  $.ajax({
    method: 'GET',
    url: 'templates/listItem.html',
  success: function(templateSource) {
    var template = Handlebars.compile(templateSource);

    _.each(list, function(entry)
      {
       listBox.append(template(entry));
       listBox.find('#collapse' + entry.name);
       joinButtonSetup($('#' + entry.name), fetchAndLoad)
      });

  }});
};
