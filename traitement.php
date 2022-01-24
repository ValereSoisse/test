<?php

if($_SERVEUR['REQUEST_METHOD'] == 'POST'){
    if(
        isset($_POST['nom']) && !empty($_POST['nom']) &&
        isset($_POST['prenom']) && !empty($_POST['prenom']) &&
        isset($_POST['email']) && !empty($_POST['email']) &&
        isset($_POST['message']) && !empty($_POST['message'])
    ){
        $nom = strip_tags($_POST['nom']);
        $prenom = strip_tags($_POST['prenom']);
        $email = strip_tags($_POST['email']);
        $message = htmlspecialchars($_POST['message']);

        echo"message de {$nom} envoyé";
    }
    
}else{
    http_response_code(405);
    echo 'Méthode non autorisée';
}
?>