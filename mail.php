<?php
session_start();
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
//Load Composer's autoloader
require 'vendor/autoload.php';
//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
try {
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'valere.soisse@gmail.com';          //SMTP username
    $mail->Password   = 'CresusG-Man59560';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    //Recipients
    $mail->setFrom($_POST['email'],$_POST['nom']. ' ' . $_POST['prenom']);
    $mail->addAddress('valere.soisse@gmail.com', 'Valère');     //Add a recipient
    $mail->addAddress('valere.soisse@gmail.com');               //Name is optional
    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $_POST['nom'];
    $mail->Body    = $_POST['message'];
    $mail->AltBody = 'Bonjour';
    $mail->send();
} catch (Exception $e) {
    echo "Le message n'est pas envoyé. Mailer Error: {$mail->ErrorInfo}";
}
header("Location:confirmation.html");
?>