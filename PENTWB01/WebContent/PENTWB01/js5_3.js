/**
 * Ejercicio 5 Slide Effects
 */
$('.parent div').on('click',function(ev) {
  $(ev.currentTarget).slideUp();
});

$('#showAll').on('click', function(ev) {
  $('.parent div').slideDown();
});