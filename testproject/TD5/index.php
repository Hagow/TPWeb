<?php 

	$prenom = $_GET["prenom"];
	$nom = $_GET["nom"];
	//echo '{"prenom":"'.$prenom.'","nom":"'.$nom.'"}';
	
	header('Content-Type: application/json');
	echo (json_encode ('{"prenom":"'.$prenom.'","nom":"'.$nom.'"}'));

?>
