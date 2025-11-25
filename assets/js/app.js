const searchInput = document.querySelector("#search");
const cnt = document.querySelector("#movie");

let timer;
searchInput.addEventListener("input", (e) => {
  clearTimeout(timer);

  const text = e.target.value.trim();

  if (text.length > 0) {
    searchTimer = setTimeout(() => {
      getMovieData(text);
    }, 500);
  } else {
    getMovieData("you");
  }
});

searchInput.addEventListener("input", (e) => {
  e.preventDefault();
  let text = document.querySelector("input").value;
  //   console.log(text);
  getData(text);
});

async function getData(text) {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${text}&apikey=8b79279e`
  );
  //   if (!response.ok) throw new Error("Network error");
  const data = await response.json();
  console.log(data);
  makeImage(data);
}

function makeImage(movies) {
  let final = "";
  movies.Search.forEach((element) => {
    final += `
    <div class="card">
    <img src="${element.Poster}">
    <h3>${element.Title}</h3>
    <p>${element.Year}</p>
    </div>
    `;
  });
  cnt.innerHTML = final;
}

getData();
