//Création du menu central
function initMenuPays () {
    var myRequestMenu = new XMLHttpRequest();
    myRequestMenu.open('GET','Data/container-bloc.json');

    myRequestMenu.onreadystatechange = function () {
        if(myRequestMenu.readyState === 4) {
            var menu = JSON.parse(myRequestMenu.responseText);
            var menuList = '<div class="contenu-visit">';

            for (var i = 0; i < menu.length; i++) {
                menuList += '<div class="bloc pays">';
                menuList += '<h3>' + menu[i].name + '</h3>';
                menuList += '<img class="image-pays" src="' + menu[i].image + '">';
                menuList += '<button class="btn btn-danger visit">Let s visit!</button>';
                menuList += '</div>';
                
            }
        }
        menuList += '</div>';
        document.getElementById('contenu-pays').innerHTML = menuList;
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
            var produitList = '<div class="contenu-prod">';

            for (var i = 0; i < menuProd.length; i++) {
                produitList += '<div class="bloc produit">';
                produitList += '<h3>' + menuProd[i].name + '</h3>';
                produitList += '<p class="prod">' + menuProd[i].text + '</p>';
                produitList += '</div>';
            }
        }
        produitList += '</div>';
        document.getElementById('contenu-produit').innerHTML = produitList;
    };
    myRequestProduit.send();
}

initMenuProduit();