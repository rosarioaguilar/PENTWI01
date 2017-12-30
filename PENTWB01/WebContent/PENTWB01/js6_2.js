/**
 * Ejercicio 6_2
 */
//bad!
//$.get("https://cfcorsdemo.azurewebsites.net/api/values");
//$('#results').text('done'); //this is an outright lie!

//good
$.get("https://cfcorsdemo.azurewebsites.net/api/values")
  .then(function() {
    $('#results').text('done with the service call'); //this is truly happening AFTER the return
  });

myDeferred()
  .then(function() {
    $('#results').append('</br>done with the custom deferred function');
  });

function myDeferred() {
  var d = $.Deferred();
  setTimeout(function() { d.resolve(); }, 5000);
  return d.promise();
}