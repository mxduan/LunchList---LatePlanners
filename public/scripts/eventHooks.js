var inputFieldSetup = function(inputFieldObject, fetchAndLoad) {
    inputFieldObject.keyup(function(event) {
        if(event.keyCode == 13) {
            event.preventDefault();
            addSublist(inputFieldObject.val(), function(data) {
                fetchAndLoad();
            });
        }
    });
};

var joinButtonSetup = function(pushButtonFieldObject, fetchAndLoad)  {
    pushButtonFieldObject.click(function(event) {
        event.preventDefault();
        
        addToSublist(pushButtonFieldObject.attr('id'), $('#set-name').val());
        fetchAndLoad();
    });
};

