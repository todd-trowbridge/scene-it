const parsedData = JSON.parse(localStorage.getItem("watchlist"))
document.addEventListener("DOMContentLoaded", function () {
  // code here will execute after the document is loaded
  const moviesContainer = document.querySelector(".movies-container");
  const renderMoviesData = renderMovies(parsedData);
  moviesContainer.innerHTML = renderMoviesData;
  document.addEventListener("click", function (e) {
    // code for document click listener goes here
    if (e.target.classList.contains("remove-button")) {
      const movieID = e.target.dataset.imdbid;
      removeFromWatchlist(movieID)
    }
  });
});

function renderMovies(movieArray) {
  const movieHtmlArray = movieArray.map(function (currentMovie) {
    return `<div class="col-sm">
    <div class="card" style="width: 18rem;">
      <img src="${currentMovie.Poster}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-title">${currentMovie.Title}</hp>
        <p class="card-text">Released: ${currentMovie.Year}</p>
        <a href="#" class="btn btn-primary remove-button" data-imdbid="${currentMovie.imdbID}">Remove</a>
      </div>
    </div>
  </div>`;
  });
  return movieHtmlArray.join("");
}

function removeFromWatchlist(id) {
  newList = []
  parsedData.filter(function (currentMovie) {
    if (currentMovie.imdbID != id){
      newList.push(currentMovie)
    }
  });
  localStorage.setItem("watchlist", JSON.stringify(newList))
  location.reload()
}