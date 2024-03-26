
/*** Gère l'affichage Film ou Série */
if (sessionStorage.getItem('mode')){
} else {
    sessionStorage.setItem('mode', 'movie');
};

/*** Ouverture et fermeture du menu */
$("#menu").on("click", function(){
    $("#navRight").toggleClass("navRightOpen");
    $("#menu div:nth-child(1)").toggleClass("menuRotate1");
    $("#menu div:nth-child(2)").toggleClass("menuRotate2");
    $("#menu div:last-child").toggleClass("menuRotate3");
    $("#autocompleteResults").slideUp();
    $("#croix").slideUp();
    $("#autocompleteResultsM").slideUp();
    $("#croixM").slideUp();
});

/*** Gestion des boutons Film et Series*/
$("#films").on("click", function(){
    sessionStorage.setItem('mode', 'movie')
    fetchMovies(filmPopulaire, "movieList");
    $(".logo span").text("Films");
    $(".duMoment h2").text("Les films du moment");
});

$("#series").on("click", function(){
    sessionStorage.setItem('mode', 'tv')
    fetchMovies(seriePopulaire, "movieList");
    $(".logo span").text("Séries");
    $(".duMoment h2").text("Les séries du moment");
});



$("#deco").on("click", function(){
    document.cookie = "user=";
    document.cookie = "conect=";
    document.location.href="./index.php";
})

