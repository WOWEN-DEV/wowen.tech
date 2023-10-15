<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $company = $_POST["company"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $consent = isset($_POST["consent"]) ? "Yes" : "No";

  $to = "emma@wowen.tech";
  $subject = "New Contact Form Submission";
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  $messageBody = "Name: $name\n";
  $messageBody .= "Company: $company\n";
  $messageBody .= "Email: $email\n";
  $messageBody .= "Message:\n$message\n";
  $messageBody .= "Consent: $consent\n";

  mail($to, $subject, $messageBody, $headers);
}
?>
