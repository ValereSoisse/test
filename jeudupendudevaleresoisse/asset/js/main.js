var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'custom',
    customDirection: {
        x0: '40%',
        y0: '10px',
        x1: '60%',
        y1: '50%',
    },
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});

// Début du script JS.

let texteMot = document.getElementById("texteMot")
let motSaisie = document.getElementById("lettre_choisi")
let saisieMotJoueur = document.getElementById("saisieUser");
let text = document.getElementById("text");
let boutonTest = document.getElementById('bouton');
let nombreDeLettre = document.getElementById('nombreDeLettre');
let lettreAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
mots = ["clavier","dualsence","tapis","voiture","television","calculatrice","telephone","lampe","ordinateur"];
let lettreAlphabetAffiche = document.getElementById("lettreAlphabet");
let nbreTentativeAfficher = document.getElementById("resteTentative");
console.log(lettreAlphabet)
let nbreTentative = 7
console.log(nbreTentative);



// Fonction qui permet de générer un mot au hasard.
function motAleatoire(){
    var motSecret =Math.floor(Math.random()*9)
  
 return(mots[motSecret])


}


// Variable qui correspond au mot à trouver.
var leMot = motAleatoire()
console.log(leMot);

var tableauReponse = [];
for (var i=0; i<leMot.length; i++){
    tableauReponse[i]="_"
    texteMot.innerHTML = tableauReponse.join(" ");
}
console.log(tableauReponse)

// Affiche le nombre de lettre à trouver.
nombreDeLettre = leMot.length;
console.log(leMot.length)
document.getElementById('p1').innerHTML = ' Vous devez trouver un mot de ' + nombreDeLettre + ' lettres.';

// Affichage des lettres de l'alphabet.
function affichageLettreRestante(){
    let lettre =" "
    for (i=0;i<26;i++){
        if (lettreAlphabet[i]!=""){
        lettre =lettre+" "+lettreAlphabet[i]
        }else {
            lettreAlphabet[i]="_"
            lettre =lettre+" "+lettreAlphabet[i]
        }
        lettreAlphabetAffiche.innerHTML = lettre 
    }
}

// Verifie si la saisie est inclue dans le mot choisi.
function correspondance(){
let saisieMotJoueur = document.getElementById("saisieUser").value;
    
    
        if (leMot.includes(saisieMotJoueur)){
            for (i=0;i<leMot.length;i++){
                if (leMot.charAt(i)==saisieMotJoueur){
                    tableauReponse[i]=leMot.charAt(i)
                    texteMot.innerHTML = tableauReponse.join(" ");
                }
            } 
        }else{
            nbreTentative--
            afficherUneImage(nbreTentative);
            affichageLettreRestante()
            afficherLeCompteur(nbreTentative);
    }if(nbreTentative==0){
resteTentative.innerHTML = '<div class="alert-danger mx-auto">Désolé, vous avez perdu !</div>';
    }
    for(i=0;i<lettreAlphabet.length;i++){
        if (lettreAlphabet[i]==lettreAlphabet[lettreAlphabet.indexOf(saisieMotJoueur)]){
            lettreAlphabet[i]="" 
        }
      
    }
    if (nbreTentative==0){
        resteTentative.innerHTML = '<div class="alert-danger mx-auto">Désolé, vous avez perdu !</div>';

    }
    
}

// Pour afficher les images du pendu
     function afficherUneImage(maVariable){    
var imageDuJeu = document.getElementById("imageDuJeu");

switch(maVariable){
    case 7 : 
        imageDuJeu.innerHTML ='<img src="asset/img/pendu0.png">'
        break;
    case 6 :
        imageDuJeu.innerHTML ='<img src="asset/img/pendu1.png">'
        break;
    case 5 :
        imageDuJeu.innerHTML ='<img src="asset/img/pendu2.png">'
        break;
    case 4 :    
        imageDuJeu.innerHTML ='<img src="asset/img/pendu3.png">'
        break;
    case 3 :
        imageDuJeu.innerHTML ='<img src="asset/img/pendu4.png">'
        break;
    case 2 :
        imageDuJeu.innerHTML ='<img src="asset/img/pendu5.png">'
        break;
    case 1 :
        imageDuJeu.innerHTML='<img src="asset/img/pendu6.png">'
        break;
    case 0 :
        imageDuJeu.innerHTML ='<img src="asset/img/pendu7.png">'
        break;
        default: 
    }
    return imageDuJeu;
}

// Fonction qui permet d'afficher le compteur de chance
function afficherLeCompteur(valeur){     
    switch(valeur){
        case 7 : 
            nbreTentativeAfficher.innerHTML ='7'
            break;
        case 6 :
            nbreTentativeAfficher.innerHTML ='6'
            break;
        case 5 :
            nbreTentativeAfficher.innerHTML ='5'
            break;
        case 4 :    
            nbreTentativeAfficher.innerHTML ='4'
            break;
        case 3 :
            nbreTentativeAfficher.innerHTML ='3'
            break;
        case 2 :
            nbreTentativeAfficher.innerHTML ='2'
            break;
        case 1 :
            nbreTentativeAfficher.innerHTML='1'
            break;
        case 0 :
            nbreTentativeAfficher.innerHTML ='Perdu'
            break;
            default:    
    }
}

  boutonTest.addEventListener("click", correspondance, false)

