var app    = require('./lib/routing/index.js');
var flickr = require('./lib/flickrIntegration.js');
var config = require('./config.json');

flickr.setApiCredentials(config);
flickr.getToken();
app.setup();
