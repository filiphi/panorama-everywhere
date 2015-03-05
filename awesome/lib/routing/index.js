var express = require('express');
var app = express();
var bodyParser = require('body-parser');


exports.setup = function() {
  app.set("views", __dirname + "/../views");
  app.set('view engine', 'jade');
  app.use(express.static("public", __dirname + "/../../public"));


  app.get("/", function(request, response) {

    response.render("index");

  });

  var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

  })

}
