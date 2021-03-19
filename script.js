// mapquest key
// mtbhj6FHUDK65jhm5YNhCClvB7GI52JS

var testUrl = 'https://www.mapquestapi.com/search/v4/place?location=-74.95590458465354%2C40.26624146333869&sort=relevance&feedback=false&key=9UthBdDGZK1MsiEFy48XWw3fWtC01AAJ&pageSize=5&q=parks'


  fetch(testUrl, {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
      console.log(response);
    return response;
  })
  .then(function (data) {
    console.log(data);
  });