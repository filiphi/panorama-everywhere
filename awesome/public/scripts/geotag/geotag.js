define(['../external/modernizr'], function(modernizr) {
  var latitude;
  var longitude;

  function show_map(position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
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
