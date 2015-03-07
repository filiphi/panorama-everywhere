var chai = require('chai');
var sinon  = require('sinon');

var Flickr = require('flickrapi');
var flickrIntegration = require("../lib/flickrIntegration.js");

var expect = chai.expect;

describe("flickrIntegration", function() {
    describe(".setApiCredentials()", function() {
      it('should set the api_key and secret', function() {
        flickrIntegration.setApiCredentials(
          { 'api_key': '123',
            'secret': '123' });
        expect(flickrIntegration.apiKey).to.equal('123');
        expect(flickrIntegration.secret).to.equal('123');
      });
    });
    describe(".getApiCredentials()", function() {
      it('should return an object with key api_key', function() {
        var result = flickrIntegration.getApiCredentials();
        expect(result).to.have.all.keys(['api_key', 'secret']);
      });
    });
    describe('.getToken()', function() {
      var FlickrMock;
      var flickr;
      var stub;

      beforeEach( function() {
        flickr = {};
        stub = sinon.stub(Flickr, 'tokenOnly', function() {
          return flickr;
        });
      });
      afterEach( function() {
        flickr = {}
        stub.restore();
      });
       it('should throw an error if api_key and secret have not been set', function() {
         flickrIntegration.setApiCredentials(
           { 'api_key': null,
             'secret': null });
         expect(flickrIntegration.getToken.bind(flickrIntegration)).to.throw(Error);
         flickrIntegration.setApiCredentials(
           { 'api_key': '123',
             'secret': null });
         expect(flickrIntegration.getToken.bind(flickrIntegration)).to.throw(Error);
         flickrIntegration.setApiCredentials(
           { 'api_key': null,
             'secret': '123' });
         expect(flickrIntegration.getToken.bind(flickrIntegration)).to.throw(Error);
       });
       it('should successfully call Flickr if called with correct input', function() {
         flickrIntegration.setApiCredentials(
           { 'api_key': '123',
             'secret': '123'});
         flickrIntegration.getToken();
         expect(stub.called).to.be.true;
       });
     });
});
