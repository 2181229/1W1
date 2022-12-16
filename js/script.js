/////     Variables     /////

let boutonBurger = document.querySelector("#cc-nav-principale");//le bouton burger
let leBody = document.querySelector("body");//la page
let navPrincipale = document.querySelector(".nav-principale");//menu


////////    Évènements     //////////

boutonBurger.addEventListener("click", gererLeDefilement);
navPrincipale.addEventListener("click", fermeMenu);


/////     Fonctions     /////

function gererLeDefilement(event) {//si le menu est ouvert (sur un petit écran), on ne peut plus défiler la page.
    if (boutonBurger.checked == true) {
        leBody.style.overflow = "hidden";
    } else {
        leBody.style.overflow = "scroll";
    }
}

function fermeMenu(event) {//si on clique un item du menu, on peut de nouveau défiler la page et on ferme le menu.
    boutonBurger.checked = false;
    leBody.style.overflow = "scroll";
}