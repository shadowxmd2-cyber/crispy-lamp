import { API_KEY, BASE_URL } from "./config.js";

async function loadPopular() {
    const res = await fetch(`${BASE_URL}/search?apiKey=${API_KEY}&query=popular`);
    const data = await res.json();

    displayMovies(data.results, "popular");
}

async function loadLatest() {
    const res = await fetch(`${BASE_URL}/search?apiKey=${API_KEY}&query=latest`);
    const data = await res.json();

    displayMovies(data.results, "latest");
}

function displayMovies(list, section) {
    const container = document.querySelector(`#${section}-movies`);
    container.innerHTML = "";

    list.forEach(movie => {
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

loadPopular();
loadLatest();