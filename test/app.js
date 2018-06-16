

$.ajax( {
	url: 'http://www.mindicador.cl/api',
	method: 'GET'
}).then(function(data){
	// console.log(data.utm.valor);


	// Pintar los valores en pantalla
	var dolar = $("#dolar").text('US$'+ data.dolar.valor);
	var euro = $("#euro").text('€'+ data.euro.valor);
	var uf = $("#uf").text('$'+ data.uf.valor);
	var utm = $("#utm").text('$'+ data.utm.valor);


	// Conversor de pesos a dolar y euro
	// $('#converPesos').on('click', function(event){
	// 	event.preventDefault();
	// 	var pesoChileno = $('#pesos').val();

	// 	var resultDolar = pesoChileno / data.dolar.valor;
	// 	var resultEuro = pesoChileno / data.euro.valor;

	// 	$("#converDolar").text('US$ ' + resultDolar.toFixed(1) );
	// 	$("#converEuro").text('€ ' + resultEuro.toFixed(1));

	// });

	// Conversor de dolar a pesos


});

$('#converPesos').on('click', function(event){

		event.preventDefault();

	$.ajax( {
		url: 'http://www.mindicador.cl/api',
		method: 'GET'
	}).then(function(data){

		var pesoChileno = $('#pesos').val();

		var resultDolar = pesoChileno / data.dolar.valor;
		var resultEuro = pesoChileno / data.euro.valor;

		$("#converDolar").text('US$ ' + resultDolar.toFixed(1) );
		$("#converEuro").text('€ ' + resultEuro.toFixed(1));

	});
});
	

$('#convertirDolar').on('click', function(event){
	event.preventDefault();

	$.ajax( {
		url: 'http://www.mindicador.cl/api',
		method: 'GET'
	}).then(function(data){

		var valorIngresado = $("#ingresarPesos").val();
		var resultadoPesos = valorIngresado * data.dolar.valor;
		$("#convertirPesos").text('$' + resultadoPesos.toLocaleString('es-CL', {maximumFractionDigits:0}));
	});
});




