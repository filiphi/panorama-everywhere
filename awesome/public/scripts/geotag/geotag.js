define(['../external/modernizr', '../routing', '../functions'], function(modernizr, routing, functions) {
  var latitude;
  var longitude;

  function show_map(position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;

    var data = {
      'latitude': this.latitude,
      'longitude': this.longitude
    };
    
    functions.post(data, routing.get_panorama);
  }
  return {
    latitude: latitude,
    longitude: longitude,
    get_location: function() {
      if (Modernizr.geolocation) {
        return navigator.geolocation.getCurrentPosition(show_map);
      } else {
        console.log('you cant use this');
      }
    }
  };
});
