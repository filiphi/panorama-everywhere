var express = require('express')
var app = express();


exports.setup = function() {

  app.get('/', function(req, res) {
    console.log("hereeeee!");
    res.send('hello world')
  });

  var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

  })

}
