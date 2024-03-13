
const apiKey = '0741d6262e8cbab94f52d8fc840b57f6';
const filmPopulaire = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&append_to_response=images&language=fr-FR&include_image_language=fr,null&sort_by=popularity.desc`;
const seriePopulaire = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&append_to_response=images&language=fr-FR&include_image_language=fr,null&sort_by=popularity.desc`;
const filmAuCine = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&append_to_response=images&language=fr-FR&include_image_language=fr,null&page=1`;
$("#autocompleteResults").hide();

//fetchMovies(seriePopulaire, "movieList");

// Fonction pour obtenir les données de l'API TMDB
async function fetchMovies(recherche, cible, nombre) {
  try {
    const movieList = document.getElementById(cible);
    movieList.innerHTML = "";
    const response = await fetch(recherche);
    const data = await response.json();
    var x = 0;
    
    // Afficher les films dans la liste avec les images
    data.results.forEach(movie => {
      if (x != nombre){
      const listItem = document.createElement('li');
      console.log(movie);
      
      // Titre du film
      const titleElement = document.createElement('h3');
      titleElement.textContent = movie.title;
      
      // Lien 
      const urlElement = document.createElement('a');
      urlElement.href = `./details.php?id=${movie.id}`;


      // Image du film
      const imageElement = document.createElement('img');
      const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      imageElement.src = imageUrl;
      imageElement.alt = movie.title;

    
      
      // Note du film
      const ratingElement = document.createElement('span');
      ratingElement.textContent = parseFloat(movie.vote_average).toFixed(1);
      
      // Ajouter les éléments à la liste
      listItem.appendChild(urlElement);
      urlElement.appendChild(imageElement);
      listItem.appendChild(titleElement);
      listItem.appendChild(ratingElement);
      
      movieList.appendChild(listItem);
      x++;
    } else{
      return;
    }

    });
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error.message);
  }
}


// Appeler la fonction pour récupérer les films
if (mode == "film") {
  fetchMovies(filmPopulaire, "movieList", 18);
  fetchMovies(filmAuCine, "filmAuCine", 1);
}
else if (mode == "serie") {
  fetchMovies(seriePopulaire, "movieList", 18);
}


/*** Barre de recherche */
$("#recherche").on("change", function(){
  if (mode == "film") {
    var filmRecherche = 'https://api.themoviedb.org/3/search/movie';
  }
  else if (mode == "serie") {
    var filmRecherche = 'https://api.themoviedb.org/3/search/tv';
  }
  var query = $(this).val();
  
  if (query.length > 0) {
    var filmR = filmRecherche + '?api_key=' + apiKey + '&query=' + query;
    
    fetchMovies(filmR, "autocompleteResults", 50);
  } else {
    autocompleteResults.innerHTML = 'Aucun résultat...';
  }
})
$("#recherche").on("focusin", function(){
  $("#autocompleteResults").slideDown();
})
$("#recherche").on("focusout", function(){
  $("#autocompleteResults").slideUp();
})

$("#rechercheM").on("change", function(){
  const filmRecherche = 'https://api.themoviedb.org/3/search/movie';
  var query = $(this).val();
  
  if (query.length > 0) {
    var filmR = filmRecherche + '?api_key=' + apiKey + '&query=' + query;

    fetchMovies(filmR, "autocompleteResults", 50);
} else {
    autocompleteResults.innerHTML = 'Aucun résultat...';
}
})
$("#rechercheM").on("focusin", function(){
  $("#autocompleteResults").slideDown();
})
$("#rechercheM").on("focusout", function(){
  $("#autocompleteResults").slideUp();
})









