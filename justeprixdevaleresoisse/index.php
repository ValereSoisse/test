<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link rel="stylesheet" type="text/css" href="asset/css/granim style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="asset/css/granim style.css">
    <link rel="stylesheet" href="asset/css/style.css">
    <title>Le juste prix par Valère Soisse</title>
</head>

<body>
    
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-xl-12 text-center p-2 mb-1">
                <h4><img src="asset/img/justeprix1.png" style="width:41px;height:26px;">Le Juste-Prix <img src="asset/img/justeprix2.png" style="width:41px;height:26px;"></h4>
            <div class="col-sm-6 mx-auto mt-5 text-center">
                <div id="objet"></div>
                <div class="mt-1" id="nom-objet"></div>
                <br>
                <div class="col-lg-12 col-xl-12 col-sm-12">
                <canvas id="canvas-basic"></canvas>
            </div>
            </div>
            <div class="mb-5 text-center">
                <label for="prix-propose" class="form-label">Proposer un prix entre 1 & 100 euros</label>
                <input type="number" class="form-control" id="prix-propose" aria-describedby="prix-propose">
                <div class="form-text mt-1" style="color: blue;">Trouver le juste prix et tentez de gagner cet objet !</div>
                <div id="nbre-tentative" class="form-texte"></div>
            </div>
            <button type="submit" id="bouton" class="btn btn-primary mt-3">Proposer</button>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-3 alert-info mx-auto mt-5 text-center">
            <div id="message">

            </div>
        </div>
    </div>
    

    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"></script>
        <script src="node_modules/granim/dist/granim.min.js"></script>
    <script src="asset/js/main.js"></script>
</body>

</html>