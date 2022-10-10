const container = document.querySelector(".main-container");
const modes = document.querySelector("#modes");
const indicator = document.querySelector(".indicator");
const url = "https://www.omdbapi.com/?s=avengers&apikey=4b229795&";



indicator.addEventListener("click", () => {
  modes.classList.toggle("night");
  indicator.classList.toggle("night");
  document.body.classList.toggle("light-mode");
});


async function showMovies() {
  const answer = await fetch(url);
  const data = await answer.json();
  const movies = data.Search;

  movies.forEach((movie, index) => {
    container.innerHTML += ` <div class="card">
    <div class="card-img" style="background-image: url(${movie.Poster});">
    </div>
    <div class="card-info">
      <div class="card-info-header">
          <h1>${movie.Title}</h1>
          <i class='fa fa-film film-icon'></i>
      </div>
      <p>
       ${movie.Type}
      </p>
    </div>
  </div>`;
  });


}

showMovies();
