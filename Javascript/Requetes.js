
const apiKey = '0741d6262e8cbab94f52d8fc840b57f6';
const filmPopulaire = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc`;
const seriePopulaire = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc`;
const filmAuCine = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=fr-FR&page=1`;

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
      
      
      // Titre du film
      const titleElement = document.createElement('h3');
      titleElement.textContent = movie.title;
      
      // Image du film
      const imageElement = document.createElement('img');
      const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      imageElement.src = imageUrl;
      imageElement.alt = movie.title;
      
      // Note du film
      const ratingElement = document.createElement('span');
      ratingElement.textContent = parseFloat(movie.vote_average).toFixed(1);
      
      // Ajouter les éléments à la liste
      listItem.appendChild(imageElement);
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
  fetchMovies(filmPopulaire, "movieList", 12);
  fetchMovies(filmAuCine, "filmAuCine", 1);
}
else if (mode == "serie") {
  fetchMovies(seriePopulaire, "movieList", 12);
}






