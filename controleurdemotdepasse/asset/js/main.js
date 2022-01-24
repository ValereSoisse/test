
let mdp = document.getElementById("mdp");
let buttonEyes = document.getElementById("buttonEyes");


function force(){
    let mdp = document.getElementById("mdp").value;
    let resultat = document.getElementById("resultat");
    let cadenasSvg = document.getElementById("cadenasSvg");
    let compteur =Number(0)

    if (mdp.length>=8){ 
        compteur = compteur + 1
        if (mdp.match(/([a-z]){1,}/)) {
            compteur = compteur + 1
        }
        if (mdp.match(/([A-Z]){1,}/)) {
            compteur = compteur + 1
        }
        if (mdp.match(/([0-9]){1,}/)) {
            compteur = compteur + 1
        }
        if (mdp.match(/[_\W]/)) {
            compteur = compteur + 1
        }        
    }

    console.log(compteur)
    switch (compteur) {
        case 0: resultat.innerHTML = "invalide "
                resultat.style.color = "#fdfefe"
                resultat.className ="animate__animated animate__bounce fw-bold"
                document.getElementById("mdp").style.border = "solid 3px red";
            break
        case 2: resultat.innerHTML = "Dangeureux "
                resultat.style.color = "#78281f"
                resultat.className ="animate__animated animate__shakeX fw-bold"
            break
        case 3: resultat.innerHTML = "Moyen "
                 resultat.style.color = " #6e2c00"
                 resultat.className ="animate__animated animate__slideInDown fw-bold"
                 document.getElementById("mdp").style.border = "solid 3px #6e2c00";
            break
        case 4: resultat.innerHTML = "Securisé "
                resultat.style.color = "#0e6251"
                resultat.className ="animate__animated animate__zoomIn fw-bold"
                document.getElementById("mdp").style.border = "solid 3px #0e6251";
            break
        case 5: resultat.innerHTML = "Trés sécurisé !"
                resultat.style.color = " #1a5276"
                resultat.className ="animate__animated animate__flipInX fw-bold"
            break
    }

    if (compteur < 3){
        cadenasSvg.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DD4040" class="bi bi-unlock-fill" viewBox="0 0 16 16"><path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"/></svg>'
    }else{
        if (compteur > 3){
            cadenasSvg.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#246B45" class="bi bi-lock-fill" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>'
        }else{
            cadenasSvg.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=" #6e2c00" class="bi bi-lock-fill" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>'
        }
    }
    
}


function affciherMotDePasse(){
    let displayMdp = document.getElementById("mdp");
    
    if (displayMdp.type=="password"){
        displayMdp.type = "text"
    } else {
        displayMdp.type = "password"
    }
    
}

mdp.addEventListener("keyup",force,false);
buttonEyes.addEventListener("click",affciherMotDePasse,false);
