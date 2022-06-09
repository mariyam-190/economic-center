<?php
//get data from form  
$fname = $_POST['f-name'];
$lname = $_POST['l-name'];
$company= $_POST['company'];
$email= $_POST['email'];
$num= $_POST['num'];
$enquiry= $_POST['enquiry'];
$to = "mariyam_190@yahoo.com";
$subject = "Mail From website";
$txt ="First-Name = ". $fname .
"\r\n  Last-Name = " . $lname .
"\r\n  company = " . $company . 
"\r\n  Email = " . $email . 
"\r\n  Number = " . $num .
"\r\n Message =" . $enquiry;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html");
?>