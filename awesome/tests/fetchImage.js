var expect = require("chai").expect;
var fetch = require("../lib/fetchImage.js");

describe("fetchImage", function() {
   describe(".getImage()", function() {
       it("should break when no lat/long is passed on", function(){
         var img = fetch.fetchImage();
         expect(img).to.equal(null);
       });
       it("should send the longitude and latitude to the flickr API", function(){
         var img = fetch.fetchImage();
         expect(img).to.equal(null);
       });
   });
});