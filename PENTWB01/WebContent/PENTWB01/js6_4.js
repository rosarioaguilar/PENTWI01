/**
 * Ejercicio 6_4
 */
$.ajax({
    url:'https://cfcorsdemo.azurewebsites.net/api/values',
    success: function(data) {
        console.log(data);
    }
});

/*$.get('https://cfcorsdemo.azurewebsites.net/api/values',
    function(data) {
        console.log(data);
    }
);*/

/*$.post(
    'https://cfcorsdemo.azurewebsites.net/api/values',
    {value:"value"},
    function(data) {
        console.log(data);
    }
);*/