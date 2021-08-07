<?php

//database constants
	define('DB_HOST', 'localhost');
	define('DB_USER', 'id15609866_saruj');
	define('DB_PASS', 'G$x\~x6OU>kE05-l');
	define('DB_NAME', 'id15609866_snake');
	
	 
 $conn = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME) or die('Unable to Connect');
 
 //connecting to database and getting the connection object
	$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
	
	//Checking if any error occured while connecting
	if (mysqli_connect_errno()) {
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
		die();
	}
 
?>

  


