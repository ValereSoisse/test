<?php

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AssurAuto</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="asset/css/style.css">  
</head>
<body>
    <header>    
        
        <div class="row hautdepage  mt-0">
            <div class="col-lg-12 text-center p-2 mb-1 ">
              <h4 class="h3 fw-bold text-white"><img src="asset/img/assurance.png" style="width:45px;height: 45px;"> Contrôleur de mot de passe <img src="asset/img/assurance.png" style="width:45px;height: 45px;"></h4>
            </div>
        </div>
    </header>
    <div class="container">        
        <div class="row">            
            <div class="col-12 text-center mt-3 mx-auto">
                <p class="h3 ">Bienvenue sur notre simulateur d'assurance en ligne,</p>
                <p class="h5">veuillez compléter les champs suivant :</p>
            </div>
        </div>
        <div class="row mt-2 text-center">
            <div class="col-lg-6 text-start mx-auto">                
                    <div class="mb-3">
                        <label for="age" class="form-label">Age du conducteur :</label>
                        <input type="number" class="form-control" id="age" required>                        
                    </div>       
            </div>
            <div class="col-lg-6 text-start mx-auto">
                <div class="mb-3">
                    <label for="permis" class="form-label">Années de permis de conduire :</label>
                    <input type="number" class="form-control" id="permis" required>
                </div>
            </div>
        </div>
        <div class="row mt-2 text-center">
            <div class="col-lg-6 text-start mx-auto">
                <div class="mb-3">
                    <label for="accident" class="form-label">Nombre d'accidents de la route :</label>
                    <input type="number" class="form-control" id="accident" required>
                </div>
            </div>
            <div class="col-lg-6 text-start mx-auto">
                <div class="mb-3">
                    <label for="fidelite" class="form-label">Années de fidélités chez nous :</label>
                    <input type="number" class="form-control" id="fidelite" required>
                </div>
            </div>
        </div>       
        <div class="row mt-3">
            <div class="col-12 text-center">
                <button id="valider" type="button" class="btn btn-primary mb-3">Valider</button>
                <button id="reeesayer" type="button" class="displayOff">Reessayer</button>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-12 col-lg-6 d-flex mx-auto" id="admission">
                <p class="h4 pe-4">Resultat d'admission :</p>
                <span class="h5 text-end" id="resultat"></span>
            </div>
            
        </div>
    </div>
    


   <script src="asset/js/main.js"></script>    
</body>
</html>



