/*** On récupère l'ID du film grace au GET de l'URL */
var parsedUrl = new URL(window.location.href);
var movieId = parsedUrl.searchParams.get("id");
console.log(movieId);
/*** Initialisation des variables */
const detailsMovie = `https://api.themoviedb.org/3/${sessionStorage.getItem('mode')}/${movieId}?api_key=${apiKey}&append_to_response=images&language=fr-FR&include_image_language=fr,null`;
const similarMovie = `https://api.themoviedb.org/3/${sessionStorage.getItem('mode')}/${movieId}/similar?api_key=${apiKey}&append_to_response=images&language=fr-FR&include_image_language=fr,null`;

/*** Function qui récupère les informations de l'API TMDB */
async function requeteTMDB(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error('Erreur lors de la récupération des données:', error.message);
  }
}

/*** Affichage du header */
requeteTMDB(detailsMovie).then(data => {
  $("#block h1").text(data.title);
  $("#block h2").text(data.original_title)
  $("#tagLine").text(data.tagline);
  $("#note").html(parseFloat(data.vote_average).toFixed(1) + "<div>" + data.vote_count + " votes</div>");
  $("#synopsis").text(data.overview);
  $("#budget").html("Budget <span>" + data.budget + "$ </span><div>Revenues <span>" + data.revenue + " $</span></div>");
  $("#date").html("Sortie <span>" + data.release_date + "</span>");
  data.production_companies.forEach(element => {
    $("#compagnies").append(`<li>${element.name}</li>`)
  });
  $("#affiche").attr("src", `https://image.tmdb.org/t/p/w500/${data.poster_path}`);
  $("#affiche").attr("alt", data.title);
  $("#backdrop").css("background-image", `url('https://image.tmdb.org/t/p/w1280/${data.backdrop_path}')`)
});

/*** Affichage des films / séries similaires */
requeteTMDB(similarMovie).then(data => {
  data.results.forEach(movie => {
    const movieList = document.getElementById("movieListS");
    const listItem = document.createElement('li');
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
  // On ajoute tout à listItem  
    listItem.appendChild(urlElement);
    urlElement.appendChild(imageElement);
    listItem.appendChild(titleElement);
    listItem.appendChild(ratingElement);
  // On envoie listItem dans la page
    movieList.appendChild(listItem);
  })
});


