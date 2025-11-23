import { API_KEY, BASE_URL } from "./config.js";

const q = new URLSearchParams(location.search).get("q");

document.querySelector("#search-input").value = q;

async function searchMovies() {
    const res = await fetch(`${BASE_URL}/search?apiKey=${API_KEY}&query=${q}`);
    const data = await res.json();

    const container = document.querySelector("#results");
    container.innerHTML = "";

    data.results.forEach(movie => {
        container.innerHTML += `
            <div class="movie-card" onclick="goMovie('${movie.url}')">
                <img src="${movie.poster}" />
                <p>${movie.title}</p>
            </div>
        `;
    });
}

window.goMovie = function (url) {
    window.location.href = `/pages/movie.html?url=${encodeURIComponent(url)}`;
}

searchMovies();