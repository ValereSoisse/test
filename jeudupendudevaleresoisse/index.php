<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le jeu du Pendu Par Valère Soisse</title>
    <!-- CSS only -->
 
    <link rel="stylesheet" type="text/css" href="asset/css/granim style.css">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <link rel="stylesheet" href="asset/css/style.css">
</head>
<body>
    <div class="container-fluide">
        <div class="row ">
            <div class="col-lg-12 col-xl-12 text-center p-2 mb-3">
                <h4><img src="asset/img/pendu.png" style="width:45px;height: 33px;">Le jeu du pendu <img src="asset/img/pendu.png" style="width:45px; height: 33px;"></h4>
                <canvas id="canvas-basic"></canvas>
            </div>
            <div class="col-12 text-center jeudupendu mt-1">
                <p style="font-weight: bold; font-size: 20px;text-decoration:underline;">Les règles du jeu</p>
            </div>

            <div class="col-6 text-center mt-1 mx-auto">
                
                <div class="nombreDeLettre">
                    <p id="p1"></p>
                </div>
                <p>Vous devez taper au clavier une lettre par tentative, lorsque c'est une bonne lettre, elle
                    s'affichera à la place des caractères "_"</p>
                <p><strong>Attention:</strong> à chaque mauvaise tentative, vous perdez une tentative.</p>
                <p>Vous avez 10 tentative pour deviner le mot.</p>
            </div>
        </div>

        <div class="row">
            <div class="col-6 text-center mb-5 mt-1 mx-auto">
                <p>Lettres disponible :</p>
                <div class="text-center" id="lettreAlphabet"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-6 text-start mt-3 mx-auto">
                <div class="text-center" id="victoireDefaite"></div>
            </div>
        </div>

        <div class="row mt-1">
            <div class="col-6 bg-primary mx-auto d-flex justify-content-center">
                <div class="mb-1 mt-2">
                    <label for="exampleFormControlInput1" class="form-label">Renseignez votre proposition :</label>
                    <input type="text" class="form-control text-center" size="1" maxlength="1" id="saisieUser"
                        placeholder="Tapez votre mot...">
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="col-6 bg-primary mx-auto text-center">
                <div class="mb-3">
                    <button type="button" class="btn btn-danger mt-3" id="bouton">Tester !</button>
                </div>
            </div>
        </div>
        <div class="row mt-1">
            <div class="col-6  mx-auto text-center">
                <div class="text-center" id="text"></div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-lg-3"></div>
            <div class="col-lg-6 mb-3 font-monospace display-5">
                <div class="text-center" id="texteMot"></div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-lg-3 "></div>
            <div class="col-lg-6 text-center" id="imageDuJeu"></div>
        </div>
        <div class="row mt-3">
            <div class="col-lg-12 text-center">
                <p>Nombres de tentatives restantes :</p>
            </div>
            <div class="col-lg-3"></div>
            <div class="col-lg-6 alert-info text-center">
                <div class=" " id="resteTentative"></div>
            </div>
        </div>
    </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"></script>
    <script src="node_modules/granim/dist/granim.min.js"></script>
    <script src="asset/js/main.js"></script>
</body>

</html>