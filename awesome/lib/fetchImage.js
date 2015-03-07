var flickrIntegration = require('./flickrIntegration');
var config = require('../config.json');


exports.fetchImage = function (long, lat) {

  if ((typeof long === "undefined") && (typeof lat === "undefined")) {
    return null;
  }

  flickr = flickrIntegration.setApiCredentials(config);
  flickr = flickr.getToken();
};
