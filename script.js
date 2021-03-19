// mapquest key
// mtbhj6FHUDK65jhm5YNhCClvB7GI52JS

var testUrl = 'https://www.mapquestapi.com/search/v4/place?location=-74.95590458465354%2C40.26624146333869&sort=relevance&feedback=false&key=9UthBdDGZK1MsiEFy48XWw3fWtC01AAJ&pageSize=5&q=parks'


  // fetch(testUrl)
  // .then(function (response) {
  //   return response;
  // })
  // .then(function (data) {
  //   console.log(data);
  // });

  // GET Request.
fetch(testUrl)
// Handle success
.then(response => response.json())  // convert to json
.then(json => console.log(json))    //print data to console
.catch(err => console.log('Request Failed', err)); // Catch errors