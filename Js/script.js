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
        document.getElementById('container-pays').innerHTML = menuList;
    };
    myRequestMenu.send();
}

//initPaysCarte();

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
        document.getElementById('container-pays').innerHTML = menuList;
    };
    myRequestMenu.send();
}

initPaysListe();

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
                produitList += '<div class="nos-produits-item wow jackInTheBox" data-wow-duration:"1s">';
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