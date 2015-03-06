define([], function() {
  return {
    post: function (data, url, callback) {
      var request = new XMLHttpRequest();
      request.open('POST', url, true);
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

      request.onreadystatechange = function() {//Call a function when the state changes.
      	if(request.readyState == 4 && request.status == 200) {
      		alert(request.responseText);
      	}
      };

      request.send(data);

    }
  };
});
