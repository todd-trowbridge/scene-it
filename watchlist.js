document.addEventListener("DOMContentLoaded", function () {
  // code here will execute after the document is loaded
  const moviesContainer = document.querySelector(".movies-container");
  const parsedData = JSON.parse(localStorage.getItem("watchlist"))
  const renderMoviesData = renderMovies(parsedData);
  moviesContainer.innerHTML = renderMoviesData;
});

function renderMovies(movieArray) {
  const movieHtmlArray = movieArray.map(function (currentMovie) {
    return `<div class="col-sm">
    <div class="card" style="width: 18rem;">
      <img src="${currentMovie.Poster}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-title">${currentMovie.Title}</hp>
        <p class="card-text">Released: ${currentMovie.Year}</p>
        <a href="#" class="btn btn-primary add-button" data-imdbid="${currentMovie.imdbID}" >Add</a>
      </div>
    </div>
  </div>`;
  });
  return movieHtmlArray.join("");
}
