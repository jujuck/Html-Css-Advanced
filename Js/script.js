var A = 'Home';
var B = 'Spirit';
var C = 'Testimonials';
var D = 'Compteur';
var Home = A;
var Spirit = B;
var Testimonials = C;
var Compteur = D;
var Discovery = 'Discovery';
var Produit = 'Proposals'

//==========Mise en place de la page Header===========*/
function sendHeader(Home) {
    document.getElementById(Home).innerHTML = "";
    var myRequestHeader = new XMLHttpRequest();
    myRequestHeader.open('GET', 'html/Header.html');
    myRequestHeader.onreadystatechange = function () {
        if (myRequestHeader.readyState === 4) {
            document.getElementById(Home).innerHTML = myRequestHeader.responseText;
        }
    };
    myRequestHeader.send();
}

sendHeader(Home);

//==========Mise en place de la page Our Spirit===========*/
function sendOurSpirit(Spirit) {
    document.getElementById(Spirit).innerHTML = "";
    var myRequestSpirit = new XMLHttpRequest();
    myRequestSpirit.open('GET', 'html/Spirit.html');
    myRequestSpirit.onreadystatechange = function () {
        if (myRequestSpirit.readyState === 4) {
            document.getElementById(Spirit).innerHTML = myRequestSpirit.responseText;
        }
    };
    myRequestSpirit.send();
}

sendOurSpirit(Spirit);

//==========Mise en place de la page Discovery ===========*/
function sendDiscovery(Discovery) {
    document.getElementById(Discovery).innerHTML = "";
    var myRequestDiscovery = new XMLHttpRequest();
    myRequestDiscovery.open('GET', 'html/Pays.html');
    myRequestDiscovery.onreadystatechange = function () {
        if (myRequestDiscovery.readyState === 4) {
            document.getElementById('Discovery').innerHTML = myRequestDiscovery.responseText;
        }
    };
    myRequestDiscovery.send();
    
}
sendDiscovery(Discovery);

//==========Création générale de l'espace Pays===========
//===============Création du menu central=============
function initPaysCarte () {
    var myRequestMenu = new XMLHttpRequest();
    myRequestMenu.open('GET','Data/container-bloc.json');

    myRequestMenu.onreadystatechange = function () {
        if(myRequestMenu.readyState === 4) {
            var menu = JSON.parse(myRequestMenu.responseText);
            var menuList = '<div class="row row-pays-carte">';

            for (var i = 0; i < menu.length; i++) {
                menuList += '<div class="col-xs-12 col-sm-6 col-md-3 nos-pays-carte">';
                menuList += '<div class="nos-pays-carte-item wow zoomIn" data-wow-duration:"1s">'
                menuList += '<h3>' + menu[i].name + '</h3>';
                menuList += '<img class="image-pays-carte" src="' + menu[i].image + '">';
                menuList += '<button class="btn btn-pays">Let s visit!</button>';
                menuList += '</div>';
                menuList += '</div>';
                
            }
        }
        menuList += '</div>';
        document.querySelector("#Discovery div.nos-pays div.container-pays").innerHTML = menuList;
    };
    myRequestMenu.send();
}

initPaysCarte();

//=============Création du menu central=====================
function initPaysListe () {
    var myRequestMenu = new XMLHttpRequest();
    myRequestMenu.open('GET','Data/container-bloc.json');

    myRequestMenu.onreadystatechange = function () {
        if(myRequestMenu.readyState === 4) {
            var menu = JSON.parse(myRequestMenu.responseText);
            var menuList = '<div class="pays-détail">';

            for (var i = 0; i < menu.length; i++) {
                menuList += '<div class="row row-pays-detail wow rubberBand" data-wow-duration:"1s">'
                menuList += '<div class="col-md-2 nos-pays-detail-titre">';
                menuList += '<h3>' + menu[i].name + '</h3>';
                menuList += '</div>';
                menuList += '<div class="col-md-2 nos-pays-detail-img">'
                menuList += '<img class="image-pays-detail" src="' + menu[i].image + '">';
                menuList += '</div>';
                menuList += '<div class="col-md-8 nos-pays-detail-text">';
                menuList += '<p>' + menu[i].text + '<a href="#">Lire la suite...</a><p>'
                menuList += '</div>';
                menuList += '</div>'; 
            }
        }
        menuList += '</div>';
        document.querySelector("#Discovery div.nos-pays div.container-pays").innerHTML = menuList;
    };
    myRequestMenu.send();
}


//==========Mise en place de la page Commentaires===========*/
function sendCommentaires(Testimonials) {
    document.getElementById(Testimonials).innerHTML = "";
    var myRequestComments = new XMLHttpRequest();
    myRequestComments.open('GET', 'html/Commentaires.html');
    myRequestComments.onreadystatechange = function () {
        if (myRequestComments.readyState === 4) {
            document.getElementById(Testimonials).innerHTML = myRequestComments.responseText;
        }
    };
    myRequestComments.send();
}

sendCommentaires(Testimonials);

//==========Mise en place de la page Produit ===========*/
function sendProduit(Produit) {
    document.getElementById(Produit).innerHTML = "";
    var myRequestProduit = new XMLHttpRequest();
    myRequestProduit.open('GET', 'html/Proposal.html');
    myRequestProduit.onreadystatechange = function () {
        if (myRequestProduit.readyState === 4) {
            document.getElementById(Produit).innerHTML = myRequestProduit.responseText;
        }
    };
    myRequestProduit.send();
    
}
sendProduit(Produit);

//===============Création du menu produit====================
function initMenuProduit () {
    var myRequestProduit = new XMLHttpRequest();
    myRequestProduit.open('GET','Data/container-produit.json');

    myRequestProduit.onreadystatechange = function () {
        if(myRequestProduit.readyState === 4) {
            var menuProd = JSON.parse(myRequestProduit.responseText);
            var produitList = '<div class="row row-produit">';

            for (var i = 0; i < menuProd.length; i++) {
                produitList += '<div class="col-xs-12 col-sm-8 col-md-4 nos-produit-bloc">';
                produitList += '<div class="nos-produits-item wow jackInTheBox" data-wow-duration:"1s">';
                produitList += '<h3>' + menuProd[i].name + '</h3>';
                produitList += '<p class="nos-produit-text">' + menuProd[i].text + '</p>';
                produitList += '<button class="btn btn-pays">Let s Go!</button>';
                produitList += '</div>';
                produitList += '</div>';
            }
        }
        produitList += '</div>';
        document.querySelector("#Proposals div.nos-produits div.container-produit").innerHTML = produitList;
    };
    myRequestProduit.send();
}

initMenuProduit();

//==========Mise en place de la page Compteur===========*/
function sendCompteur(Compteur) {
    document.getElementById(Compteur).innerHTML = "";
    var myRequestCompteur = new XMLHttpRequest();
    myRequestCompteur.open('GET', 'html/Compteur.html');
    myRequestCompteur.onreadystatechange = function () {
        if (myRequestCompteur.readyState === 4) {
            document.getElementById(Compteur).innerHTML = myRequestCompteur.responseText;
        }
    };
    myRequestCompteur.send();
}

sendCompteur(Compteur);

//==========Mise en place de la page Formulaire===========*/
/*function sendFormulaire() {
    var myRequestFormulaire = new XMLHttpRequest();
    myRequestFormulaire.open('GET', 'html/Formulaire.html');
    myRequestFormulaire.onreadystatechange = function () {
        if (myRequestFormulaire.readyState === 4) {
            document.getElementById('Contact').innerHTML = myRequestFormulaire.responseText;
        }
    };
    myRequestFormulaire.send();
}

sendFormulaire();*/

//===============Vérification du formulairere et reconfiguration de la page========
//============= Reconfiguration des elements====================
function initNewConfig(configNum) {
    switch(configNum) {
    case "1":
        Home = A;
        Spirit = B;
        Testimonials = C;
        Compteur = D;
        break;
    case "2":
        Home = B;
        Spirit = C;
        Testimonials = D;
        Compteur = A;
        break;
    case "3":
        Home = C;
        Spirit = D;
        Testimonials = A;
        Compteur = B;
        break;
    case "4":
        Home = D;
        Spirit = A;
        Testimonials = B;
        Compteur = C;
        break;
    default:
         alert("Ce numero ne convient à aucune configuration");
    } 
    sendHeader(Home);
    sendOurSpirit(Spirit);
    sendCompteur(Compteur);
    sendCommentaires(Testimonials);
}


//validate password 
document.getElementById("password").addEventListener("input", function (e) {
	var password = e.target.value;
	var passwordLength = "weak";
	var messageColor = "black";
	var passwordRegexLetter = /[A-Z]/;
	var passwordRegexNumber = /[1-9]/;
	var strength = 0;
	var Letter = "Capital letter: checked";
	var Nombre = "Number: checked";

	//Calcul de la force du mot de passe
	if (passwordRegexLetter.test(e.target.value) === true) {
		strength += 2;
	} else {
		var Letter = "Must have at least one capital Letter";
	};

	if (passwordRegexNumber.test(e.target.value) === true) {
		strength += 2;
	} else {
		var Nombre = "must have at least one number";
	};

	strength += password.length;

	//Affichage des différents cas
	if (strength > 12) {
		passwordLength = "Very Strong";
		messageColor = "green";
	} else if (strength >= 10)  {
		passwordLength = "Strong";
		messageColor = "yellow";
	} else if (strength >= 8) {
		passwordLength = "Medium";
		messageColor = " orange";
	} else if (strength >= 6) {
		passwordLength = "Poor";
		messageColor = "red";
	}

	var passwordHelpElement = document.getElementById("passwordHelp");
	passwordHelpElement.textContent = "Strength: " + passwordLength + ", " + Letter + ", " + Nombre;
	passwordHelpElement.style.color = messageColor;
});

function verificationFormulaire() {
    var utilisateur = document.getElementById("username").value;
    var motDePasse = document.getElementById("password").value;

    if (utilisateur === "julien" && motDePasse === "motdepasse") {
        var configNum = prompt('Bonjour, veuillez entrez un N° de configuration 1-4');
        initNewConfig(configNum);  
    } else {
        alert("Tu peux toujours courir!");
    }
}