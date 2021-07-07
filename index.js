const parsedData = JSON.parse(localStorage.getItem("watchlist"));
document.addEventListener("DOMContentLoaded", function () {
  // code here will execute after the document is loaded
  const searchForm = document.getElementById("search-form");
  searchForm.addEventListener("submit", function (e) {
    const moviesContainer = document.querySelector(".movies-container");
    e.preventDefault();
    const searchString = document.getElementById("button-0");
    console.log(searchString.value);
    const urlEncodedSearchString = encodeURIComponent(searchString.value);
    console.log(urlEncodedSearchString);
    fetch("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString)
      .then((response) => response.json())
      .then((data) => {
        const renderMoviesData = renderMovies(data.Search);
        console.log(movieData);
        movieData = data.Search;
        moviesContainer.innerHTML = renderMoviesData;
        console.log(data);
      });
  });
  document.addEventListener("click", function (e) {
    // code for document click listener goes here
    if (e.target.classList.contains("add-button")) {
      const movieID = e.target.dataset.imdbid;
      saveToWatchList(movieID);
    }
  });
});

function saveToWatchList(movieID) {
  const movie = movieData.find(function (currentMovie) {
    return currentMovie.imdbID == movieID;
  });
  let watchlistJSON = localStorage.getItem("watchlist");
  let watchlist = JSON.parse(watchlistJSON);
  watchlist.push(movie);
  watchlistJSON = JSON.stringify(watchlist);
  localStorage.setItem("watchlist", watchlistJSON);
}

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
