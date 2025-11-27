interface Movie {
  Title: string;
  Year: string;
  Poster: string;
}

interface OmdbResponse {
  Search?: Movie[];
  Response: string;
  Error?: string;
}

const searchInput = document.querySelector("#search") as HTMLInputElement;
const cnt = document.querySelector("#movie") as HTMLElement;

let timer: ReturnType<typeof setTimeout>;

searchInput.addEventListener("input", () => {
  clearTimeout(timer);

  const text = searchInput.value.trim();

  timer = setTimeout(() => {
    if (text.length > 0) {
      getData(text);
    } else {
      getData("you");
    }
  }, 500);
});

async function getData(text: string): Promise<void> {
  const res = await fetch(`https://www.omdbapi.com/?s=${text}&apikey=8b79279e`);

  const data: OmdbResponse = await res.json();
  console.log(data);

  makeImage(data);
}

function makeImage(data: OmdbResponse): void {
  if (!data.Search) {
    cnt.innerHTML = `<h2>No movies found</h2>`;
    return;
  }

  const html = data.Search.map((movie) => {
    return `
      <div class="card">
        <img src="${movie.Poster}" alt="${movie.Title}">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
      </div>
    `;
  }).join("");

  cnt.innerHTML = html;
}

// Initial load
getData("you");
