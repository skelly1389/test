// mapquest key
// mtbhj6FHUDK65jhm5YNhCClvB7GI52JS

var testSearchUrl = 'https://www.mapquestapi.com/search/v4/place?location=-74.95590458465354%2C40.26624146333869&sort=relevance&feedback=false&key=9UthBdDGZK1MsiEFy48XWw3fWtC01AAJ&pageSize=5&q=parks'
var testLocationUrl = 'https://www.mapquestapi.com/geocoding/v1/address?key=mtbhj6FHUDK65jhm5YNhCClvB7GI52JS&location=philadelphia,pa';
var testInput = 'Philadelphia, PA';
var testLocation = testInput.replace(/\s+/g, '');

function getLocation(){
  fetch('https://www.mapquestapi.com/geocoding/v1/address?key=mtbhj6FHUDK65jhm5YNhCClvB7GI52JS&location=' + testLocation)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var userLon = data.results[0].locations[0].latLng.lng;
    var userLat = data.results[0].locations[0].latLng.lat;
    getParks(userLon, userLat)
  })
  }

function getParks(lon, lat){
  fetch('https://www.mapquestapi.com/search/v4/place?location=' + lon + '%2C' + lat +'&sort=relevance&feedback=false&key=9UthBdDGZK1MsiEFy48XWw3fWtC01AAJ&pageSize=5&q=parks')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for(i=0;i<6;i++){
      console.log('park name: ' + data.results[i].name);
    }
  })
  }

getLocation();