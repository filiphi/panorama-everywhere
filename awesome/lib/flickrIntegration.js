var Flickr = require('flickrapi');
var fs     = require('fs');

var flickrIntegration = {
  apiKey: null,
  secret: null,
  flickr: {},

  getApiCredentials: function() {
    return {
      'api_key': this.apiKey,
      'secret': this.secret,
    };
  },
  setApiCredentials: function(data) {
    this.apiKey = data['api_key'];
    this.secret = data['secret'];
  },
  getToken: function () {
    var integration = this;

    if (!(typeof this.apiKey === "string")) {
      throw new Error('api_key not included');
    };
    if (!(typeof this.secret === "string")) {
      throw new Error('secret not included');
    };

    var credentials = this.getApiCredentials();

    this.flickr = Flickr.tokenOnly(credentials, function(error, flickr) {
      console.log(flickr);
      console.log(error);

      if (!error) {
        console.log('no error returned from flickr');

        integration.flickr = flickr;
      }
      else {
        throw new Error('could not get token');
      }
    });

    return this.flickr;
  }
};

module.exports = flickrIntegration;
