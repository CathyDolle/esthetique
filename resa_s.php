<?php
$date = date("d-m-Y", strtotime($_POST['date']));
$to      = 'showroomrelookingms@gmail.com';
$subject = 'Showroomrelooking RDV - A '.htmlspecialchars($_POST['hour']).' le '.$date.' pour '.htmlspecialchars($_POST['service']);

$message = 'Date : '.htmlspecialchars($date)."\n \n".
'Horaire : '.htmlspecialchars($_POST['hour'])."\n \n".
'Service : '.htmlspecialchars($_POST['service'])."\n \n".
'Nom / prénom : '.htmlspecialchars($_POST['name'])."\n \n".
'Infos supplémentaires : '.htmlspecialchars($_POST['message'])."\n \n";

$headers = 'From: showroomrelookingms@gmail.com' . "\r\n" .
    'Reply-To: showroomrelookingms@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion(). "\r\n";

mail($to, $subject, $message, $headers);
header("Refresh: 6;url=/");
?>
