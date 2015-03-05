require(['geotag/geotag'], function (geotag) {
  var locationArray = geotag.get_location();
  console.log(locationArray);
  console.log('monkey!!');
  console.log('this is the first line of code');
});
