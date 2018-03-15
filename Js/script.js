//Création du menu central
function initMenuPays () {
    var myRequestMenu = new XMLHttpRequest();
    myRequestMenu.open('GET','Data/container-bloc.json');

    myRequestMenu.onreadystatechange = function () {
        if(myRequestMenu.readyState === 4) {
            var menu = JSON.parse(myRequestMenu.responseText);
            var menuList = '<div class="row row-pays">';

            for (var i = 0; i < menu.length; i++) {
                menuList += '<div class="col-xs-12 col-sm-6 col-md-3 nos-pays-bloc">';
                menuList += '<div class="nos-pays-item">'
                menuList += '<h3>' + menu[i].name + '</h3>';
                menuList += '<img class="image-pays" src="' + menu[i].image + '">';
                menuList += '<button class="btn btn-pays">Let s visit!</button>';
                menuList += '</div>';
                menuList += '</div>';
                
            }
        }
        menuList += '</div>';
        document.getElementById('container-pays').innerHTML = menuList;
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
            var produitList = '<div class="row row-produit">';

            for (var i = 0; i < menuProd.length; i++) {
                produitList += '<div class="col-xs-12 col-sm-8 col-md-4 nos-produit-bloc">';
                produitList += '<div class="nos-produits-item">';
                produitList += '<h3>' + menuProd[i].name + '</h3>';
                produitList += '<p class="nos-produit-text">' + menuProd[i].text + '</p>';
                produitList += '<button class="btn btn-pays">Let s Go!</button>';
                produitList += '</div>';
                produitList += '</div>';
            }
        }
        produitList += '</div>';
        document.getElementById('container-produit').innerHTML = produitList;
    };
    myRequestProduit.send();
}

initMenuProduit();