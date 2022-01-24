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

const nomObjet = ['Un casque gamer', 'Une dualsence', 'Une guitare electrique', 'Vans', 'Un ampli','Une GTX3090','Un iphone12','Un ipad7','Une enceinte bose','Un clavier apex7','Un écran Benq'];
const imageObjet = ['casque-gamer.png', 'dualsence.png', 'guitare-electrique.png', 'vans.png', 'ampli.png','gtx3090.jpg','iphone12.jpeg','ipad7.jpg','enceintebose.jpg','clavierapex7.jpg','benq.jpg'];
let prixPropose;
let prixMystere;
let valeurMax;
let nbreAleatoire;
let compteurTentative;
let image = document.getElementById('objet');
let nomImage = document.getElementById('nom-objet');
let bouton = document.getElementById('bouton');
let message = document.getElementById('message');

let affichageTentative = document.getElementById('nbre-tentative');

function genererUnChiffre(valeurMax) {
    return Math.floor(Math.random() * Math.floor(valeurMax));
   
}
prixMystere = genererUnChiffre(100) + 1;

nbreAleatoire = genererUnChiffre(11);
console.log(prixMystere)



function afficherImage(valeur) {
    return '<img src="asset/img/' + valeur + '"class=img-fluid width="40%" alt="Responsive image">';
}
image.innerHTML = afficherImage(imageObjet[nbreAleatoire]);
nomImage.innerHTML = nomObjet[nbreAleatoire];
compteurTentative = 10;
affichageTentative.innerHTML = "Il vous reste " + compteurTentative + " tentatives...";

function verifierProposition() {
    prixPropose = document.getElementById('prix-propose').value;
    if (compteurTentative == 0) {
       
        message.innerHTML = '<div class="alert-danger mx-auto">Désolé, vous avez perdu !<br> Le juste prix était de ' + prixMystere +  ' euros. </div>';
        bouton.disabled = true;

    } else {
        if (prixPropose > prixMystere) {
            message.innerHTML = "c'est moins !";
            compteurTentative --;
            affichageTentative.innerHTML = " Il vous reste " + compteurTentative + " tentatives...";
        }
        if(prixPropose < prixMystere){
            message.innerHTML = " c'est plus !";
            compteurTentative --;
            affichageTentative.innerHTML = " Il vous reste  " + compteurTentative + " tentatives...";
        }
        if (prixPropose == prixMystere) {
            message.innerHTML = " Bravo vous avez gagné !";
            affichageTentative.innerHTML = " En " + compteurTentative + " tentatives ...";
            bouton.disabled = true;
        }
    }
}


bouton.addEventListener('click', verifierProposition, false);

