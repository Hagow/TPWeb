$(document).ready( function(){

	$( "#req_get").click(function(){
	/*	$.get('index.php?prenom=chris&nom=sab', function(data) {
			console.log(data);
		});*/

		$.getJSON(
			'index.php',
			{
				"prenom" : 'Christo',
				"nom" : 'Sabo'
			},
			function(data) {
				console.log(data);
			}
		);
	});

});