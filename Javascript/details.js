/*** On récupère l'ID du film grace au GET de l'URL */
var parsedUrl = new URL(window.location.href);
var movieId = parsedUrl.searchParams.get("id");


const detailsMovie = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=images&language=fr-FR&include_image_language=fr,null`;
const similarMovie = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}&append_to_response=images&language=fr-FR&include_image_language=fr,null`;


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

requeteTMDB(detailsMovie).then(data => {
  console.log(data);
  $("#block h1").text(data.title);
  $("#block h2").text(data.original_title)
  $("#tagLine").text(data.tagline);
  $("#note").text(data.vote_average);
  $("#nbVote").text(data.vote_count);
  $("#synopsis").text(data.overview);
  $("#budget").text(data.budget);
  $("#date").text(data.release_date);
  data.production_companies.forEach(element => {
    $("#compagnies").append(`<li>${element.name}</li>`)
  });
  console.log(data.production_companies)
  $("#affiche").attr("src", `https://image.tmdb.org/t/p/w500/${data.poster_path}`);
  $("#affiche").attr("alt", data.title);
  $("#backdrop").css("background-image", `url('https://image.tmdb.org/t/p/w1280/${data.backdrop_path}')`)
});


/*
requeteTMDB(similarMovie).then(data => {
  console.log(data);
  data.results.forEach(movie => {
    const listItem = document.createElement('li');



    listItem.appendChild(urlElement);
    urlElement.appendChild(imageElement);
    listItem.appendChild(titleElement);
    listItem.appendChild(ratingElement);

    filmsSimilaires.appendChild(listItem);

  })
});*/


