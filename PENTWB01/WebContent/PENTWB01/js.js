/**
 * 
 */
/* Ejercicio 1 */
$("p").css("background-color","red").css("color","green");


/* Ejercicio 4_1 */
$('div').on('click',function(ev) {
	  console.log(ev.currentTarget.dataset.name);
	  ev.stopPropagation();
	});

	$('#triggerIt').on('click', function(ev) {
	  $('div[data-name="child 3"]').trigger('click'); //programmatically cause a click to happen just as if the user had actually clicked it
	});

	$('#turnEmOff').on('click', function(ev) {
	  $('div').off(); //remove ALL event handlers
	  //$('div').off('click'); //just remove click handlers
	});
	
