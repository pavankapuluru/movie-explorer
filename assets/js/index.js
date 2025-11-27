var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const searchInput = document.querySelector("#search");
const cnt = document.querySelector("#movie");
let timer;
searchInput.addEventListener("input", () => {
    clearTimeout(timer);
    const text = searchInput.value.trim();
    timer = setTimeout(() => {
        if (text.length > 0) {
            getData(text);
        }
        else {
            getData("you");
        }
    }, 500);
});
function getData(text) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`https://www.omdbapi.com/?s=${text}&apikey=8b79279e`);
        const data = yield res.json();
        console.log(data);
        makeImage(data);
    });
}
function makeImage(data) {
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
export {};
//# sourceMappingURL=index.js.map