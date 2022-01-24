
var btnValider = document.getElementById("valider");
var btnRetry = document.getElementById("reeesayer");

document.getElementById("age").value= "";
document.getElementById("permis").value= "";
document.getElementById("accident").value= "";
document.getElementById("fidelite").value= "";

function admission(){
    var age = document.getElementById("age").value;
    var permis = document.getElementById("permis").value;
    var accident = document.getElementById("accident").value;
    var fidelite = document.getElementById("fidelite").value;
    var resultat = document.getElementById("resultat");
    var compteur = Number(0);

    compteur = Number(compteur) + Number(accident);    
    
    if(age>17){
        if (age < 25 && age > 17) {
            compteur = compteur + 1;
            console.log("age : +1")
        }
        if (permis < 2) {
            compteur = compteur + 1;
            console.log("permis : +1")
        } 
        if (fidelite >= 1) {
            compteur = compteur - 1;
            console.log("fidelite : -1")
        } 
        console.log(compteur)
        switch (compteur) {
            case -1 : resultat.className="h5 text-end text-primary"
            resultat.innerHTML = "ADMIS au tarif Bleu !"
            afficherBtnRetry()
                break
            case 0 : resultat.className="h5 text-end text-success"
            resultat.innerHTML = "ADMIS au tarif Vert !"
            afficherBtnRetry()
                break
            case 1 : resultat.className="h5 text-end text-warning"
            resultat.innerHTML = "ADMIS au tarif Orange !"
            afficherBtnRetry()
                break
            case 2 : resultat.className="h5 text-end text-danger"
            resultat.innerHTML = "ADMIS au tarif Rouge !"
            afficherBtnRetry()
                break
        }
        if (compteur >= 3) {
         resultat.innerHTML = "REFUSE !"
         afficherBtnRetry()
        }
    }else{
        
        Swal.fire({
            title: "Age incorrect <br> (vous n'êtes pas majeur)",
            showClass: {
              popup: 'animate__animated animate__bounceIn'
            },
            hideClass: {
              popup: 'animate__animated animate__bounceOut'
            }
          })
    }
}

function afficherBtnRetry(){
    btnValider.className=""
         btnRetry.className=""
         btnValider.className="displayOff"
         btnRetry.className="btn btn-primary mb-3"
}


btnValider.addEventListener("click",admission,false);
btnRetry.addEventListener("click",function(){document.location.reload()},false);