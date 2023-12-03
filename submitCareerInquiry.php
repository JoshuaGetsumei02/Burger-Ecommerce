<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST["fullName"];
    $email = $_POST["email"];
    $positionDescription = $_POST["coverLetter"];

    // Example email sending using mail() function
    $to = "joshuadechavez091@email.com";
    $subject = "New Career Inquiry";
    $message = "Full Name: $fullName\nEmail: $email\nPosition Description: $positionDescription";

    mail($to, $subject, $message);

    // You can redirect the user after successful submission
    header("Location: index.html");
    exit();
}
?>
