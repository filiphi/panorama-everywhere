var flickrIntegration = require('./flickrIntegration');
var config = require('../config.json');

var fetchImage = {
  callFlickr: function(long, lat, callback) {
    console.log('inside callFlickr ');
    console.log(flickr);
    var flickr = flickrIntegration.flickr;
    flickr.photos.search({
      has_geo: 1,
      lat: lat,
      long: long,
      page: 1,
      per_page: 20,
      extras: ['url_l']
    }, function(err, data) {
      if (err) {
        console.log('err from flickr ');
        console.log(err);

        throw new Error('Error from flickr photo search');
      }

      console.log('result from flickr ');
      console.log(data);
      callback(data);
    });
  },

  fetchImage: function (long, lat, callback) {

    if ((typeof long === "undefined") && (typeof lat === "undefined")) {
      return null;
    }

    var result = this.callFlickr('long', 'lat', callback);
    console.log('this is what is returned ');

    console.log(result);
  }
}


module.exports = fetchImage;
