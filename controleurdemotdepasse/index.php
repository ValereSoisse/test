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



    <header>    
        
        <div class="row hautdepage  mt-0">
            <div class="col-lg-12 text-center p-2 mb-1 ">
              <h4 class="h3 fw-bold text-white"><img src="asset/img/mdp.png" style="width:45px;height: 45px;"> Contrôleur de mot de passe <img src="asset/img/mdp.png" style="width:45px;height: 45px;"></h4>
            </div>
        </div>
    </header>
  
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-md-8 mx-auto text-center">
                <p class="fw-bold">Application servant à évaluer le niveau de sécurité de vos mot de passe.</p>
                <div id="cadenasSvg"></div>
            </div>
            <div class="col-12 mt-4">
                <div class="col-12 col-md-8 col-lg-4 mx-auto">
                    <div class="mb-3">
                        <label for="mdp" class="form-label">Veuillez taper votre mot de passe : </label>
                        <input type="password" class="form-control" id="mdp" placeholder="Votre mot de passe...">
                          <button type="button" class="boutonPerso" id="buttonEyes"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                          </svg></button>
                    </div>
                </div>
                <div class="col-12 d-flex flex-nowrap borderred">
                    <div class="col-6 text-end pe-4 borderred">
                        <p>Force du mot de passe :</p>
                    </div>
                    <div class="col-6 borderred">
                        <p class=" " id="resultat"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="row cadreRappel mx-auto mt-4 borderred">
        <div class="col-12  borderred ">
            <p class="pt-2 ps-4 fw-bold">Le mot de passe doit comporter :</p>
        </div>
        <div class="col-12 col-sm-6 my-0 py-0 d-flex liste1 text-start borderred">
            <ul>
                <li> au moins une minuscule</li>
                <li> au moins une majuscule</li>
                <li> au moins un caractère spécial</li>
            </ul>
        </div>
        <div class="col-12 col-sm-6  borderred liste2 d-flex  align-items-center listeColonne2">
            <ul class="listeColonne2">
                <li> au moins 8 caractères</li>
                <li> au moins un chiffre</li>
            </ul>
        </div>
    </div>
</main>
</div>




     
        <script src="../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="asset/js/main.js"></script>
    






</body>