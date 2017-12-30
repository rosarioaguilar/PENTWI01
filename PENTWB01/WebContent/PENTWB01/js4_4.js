/**
 * Ejercicio 4_4
 */

$('#cheeseburger').on('scroll', function(ev) {
  console.log('scrolling the cheeseburger div');
});

$(window)
.load(function() {
  var d = new Date();
    console.log('load ' + d.getSeconds() + "." + d.getMilliseconds());
});

$(function() {
var d = new Date();
console.log('ready ' + d.getSeconds() + "." + d.getMilliseconds());
});

