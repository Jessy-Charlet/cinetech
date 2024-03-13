var parsedUrl = new URL(window.location.href);
var movieId = parsedUrl.searchParams.get("id")
console.log(movieId);





  // URL de l'endpoint des détails d'un film
const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=images&language=fr-FR&include_image_language=fr,null`;

// Faire la requête HTTP GET
fetch(url)
  .then(response => {
    // Vérifier si la requête a réussi (code de statut 200)
    if (!response.ok) {
      throw new Error(`Erreur lors de la requête : ${response.status}`);
    }
    return response.json();
  })
  .then(movieData => {
    $("#titre").text(movieData.title);
    $("#synopsis").text(movieData.overview);
    $("#date").text(movieData.release_date);
    //var imageUrl = `https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`;
    $("#affiche").attr("src", `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`);
    $("#affiche").attr("alt", movieData.title);
    $("#backdrop").css("background-image", `url('https://image.tmdb.org/t/p/w1280/${movieData.backdrop_path}')`)
  })
  .catch(error => {
    console.error(error);
  });