/*** Initialisation des variable */
var mode = "film"; // Gère l'affichage Film ou Série


/*** Ouverture et fermeture du menu */
$("#menu").on("click", function(){
    $("#navRight").toggleClass("navRightOpen");
    $("#menu div:nth-child(1)").toggleClass("menuRotate1");
    $("#menu div:nth-child(2)").toggleClass("menuRotate2");
    $("#menu div:last-child").toggleClass("menuRotate3");
})


/*** Gestion des boutons Film et Series*/
$("#films").on("click", function(){
    mode = "film";
    fetchMovies(filmPopulaire, "movieList");
    $(".logo span").text("Films");
})

$("#series").on("click", function(){
    mode = "series";
    fetchMovies(seriePopulaire, "movieList");
    $(".logo span").text("Séries");
})

