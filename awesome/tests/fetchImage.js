var expect = require("chai").expect;
var sinon  = require('sinon');

var fetch = require("../lib/fetchImage.js");


describe("fetchImage", function() {
   describe(".getImage()", function() {
     var stub;

     beforeEach( function() {

       stub = sinon.stub(fetch, 'callFlickr', function() {
         return true;
       });
     });
     afterEach( function() {
       stub.restore();
     });
       it("should break when no lat/long is passed on", function(){
         var img = fetch.fetchImage();
         expect(img).to.equal(null);
       });
       it("should send the longitude and latitude to the flickr API", function(){
         var img = fetch.fetchImage(45,30);
         expect(stub.called).to.be.true;
       });
   });
});
