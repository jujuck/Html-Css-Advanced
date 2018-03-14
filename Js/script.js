//Création du menu central
function initMenuPays () {
    var myRequestMenu = new XMLHttpRequest();
    myRequestMenu.open('GET','Data/container-bloc.json');

    myRequestMenu.onreadystatechange = function () {
        if(myRequestMenu.readyState === 4) {
            var menu = JSON.parse(myRequestMenu.responseText);
            var menuList = '<div id="contenu" class="container">';

            for (var i = 0; i < menu.length; i++) {
                menuList += '<div id="image" class="bloc button">';
                menuList += '<h3>' + menu[i].name + '</h3>';
                menuList += '<img class="image-bloc" src="' + menu[i].image + '">';
                menuList += '<button onclick="sendTheAJAX' + [i] + '()" class="btn btn-danger">Let s visit!</button>';
                menuList += '</div>';
                menuList += '</div>';
            }
        }
        document.getElementById('container-bloc').innerHTML = menuList;
    };
    myRequestMenu.send();
}

initMenuPays();


//Création du menu produit
function initMenuProduit () {
    var myRequestProduit = new XMLHttpRequest();
    myRequestProduit.open('GET','Data/container-produit.json');

    myRequestProduit.onreadystatechange = function () {
        if(myRequestProduit.readyState === 4) {
            var menuProd = JSON.parse(myRequestProduit.responseText);
            var produitList = '<div class="container-produit">';

            for (var i = 0; i < menuProd.length; i++) {
                produitList += '<div id="produit" class="bloc produit">';
                produitList += '<h3>' + menuProd[i].name + '</h3>';
                produitList += '<p>' + menuProd[i].text + '</p>';
                produitList += '</div>';
                produitList += '</div>';

            }
        }
        document.getElementById('container-produit').innerHTML = produitList;
    };
    myRequestProduit.send();
}

initMenuProduit();