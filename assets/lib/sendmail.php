<?php


    $emailSubject = 'Form Submited';
		$webMaster = 'nathanshumate0@gmail.com';

	/* Gathering Data Variables */


      $name = $_POST['name'] ;
	    $email = $_POST['email'] ;
	    $subject = $_POST['subject'] ;
	    $message = $_POST['message'] ;

		$body = <<<EOD
	<br><hr><br>
	Email: $email <br>
	Name: $name <br>
	Subject: $subject <br>
	Message: $message <br>
EOD;




		$headers = "From: $email\r\n";
		$headers .= "Content-type: text/html\r\n";
		$success = mail ($webMaster, $emailSubject, $body, $headers);


		//send data to database
	/*

		$dbc = mysqli_connect('localhost', 'nshumate', '46FssvQNhk8i', 'nshumate_Form') or die ('Error Connecting to server');

		$query = "INSERT INTO web_form_data (email, name, phone, website, hire, fire, comments) VALUES ('$email', '$name', '$phone', '$website', '$hire_status', '$fire_status', '$comments')";

		$result = mysqli_query($dbc, $query) or die('Error Querying DB');

		mysqli_close($dbc);

  */

   header('Location: ../../success');

?>
