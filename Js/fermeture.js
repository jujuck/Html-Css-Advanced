var fermetureHome = document.getElementById("Home");
var largeurHome = parseFloat(getComputedStyle(fermetureHome).width);
var vitesse = 5; //valeur du dplcm en px
var animationId = null;
var xHome = 0;

//Déplace le bloc sur la gauche
function deplacerHome() {
    console.log("J'y suis");
    //conversion en nombre de la position du bloc (valuer de la forme "XXpx")
    console.log(xHome);
    var xMax = parseFloat(window.innerWidth);
    console.log(xMax);
    if (xHome <= xMax) {
        fermetureHome.style.left += (xHome + vitesse) + "px";
        xHome += vitesse;
        console.log(fermetureHome);
        animationId = requestAnimationFrame(deplacerHome);
    } else  {
        fermetureHome.style.left = 0 +"px";
        cancelAnimationFrame(animationId);
    }
    
}




//Animation de la page lors de la fermeture==========
function animationFermeture() {
    alert("Etes vous sur de vouloir quitter la page!");
    animationId = requestAnimationFrame(deplacerHome);
}

window.onbeforeunload = animationFermeture();