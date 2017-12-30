/**
 * Ejercicio 5 Custom Effects
 */
$('.parent div').on('click',function(ev) {
  $(ev.currentTarget).animate({width:200},{duration:500});
});

$('#stretchAll').on('click', function(ev) {
  $('.parent div').css('width','auto');
});