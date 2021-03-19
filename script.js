// mapquest key
// mtbhj6FHUDK65jhm5YNhCClvB7GI52JS

var testSearchUrl = 'https://www.mapquestapi.com/search/v4/place?location=-74.95590458465354%2C40.26624146333869&sort=relevance&feedback=false&key=9UthBdDGZK1MsiEFy48XWw3fWtC01AAJ&pageSize=5&q=parks'
var testLocationUrl = 'http://www.mapquestapi.com/geocoding/v1/address?key=mtbhj6FHUDK65jhm5YNhCClvB7GI52JS&location=philadelphia,pa';
var testLocation = 'Philadelphia, PA';

function getLocation(){
  fetch(testLocationUrl)
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log('Request Failed', err));
}

function getParks(){
  fetch(testSearchUrl)
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log('Request Failed', err));
}

getLocation();