var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fetchImage = require('../fetchImage');


exports.setup = function() {
  app.set("views", __dirname + "/../views");
  app.set('view engine', 'jade');
  app.use(express.static("public", __dirname + "/../../public"));
  app.use( bodyParser.json() );       // to support JSON-encoded bodies
  app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));

  app.get("/", function(req, res) {

    res.render("index");

  });

  app.post('/image', function(req, res) {
    fetchImage.fetchImage(req.body.longitude, req.body.latitude, function(data) {
      res.json(data);
    });
  });

  var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

  })

}
