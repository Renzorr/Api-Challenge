const container = document.querySelector(".main-container");
const modes = document.querySelector("#modes");
const url = "https://www.omdbapi.com/?s=avengers&apikey=4b229795&";

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
          <i class="fa-solid fa-film film-icon"></i>
      </div>
      <p>
       ${movie.Type}
      </p>
    </div>
  </div>`;
  });
}

showMovies();

modes.addEventListener("click", () => {
  if (modes.className != "night-mode") {
    modes.innerHTML = `<i class="fa-solid fa-moon"></i>Dark Mode`;
  } else {
    modes.innerHTML = `<i class="fa-solid fa-sun"></i>Light Mode`;
  }
  modes.classList.toggle("night-mode");
  document.body.classList.toggle("light-mode");
});
