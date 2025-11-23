import { API_KEY, BASE_URL } from "./config.js";

const url = new URLSearchParams(location.search).get("url");

async function loadMovie() {
    const res = await fetch(`${BASE_URL}/movie?apiKey=${API_KEY}&url=${url}`);
    const data = await res.json();

    document.querySelector("#title").textContent = data.title;
    document.querySelector("#video").src = data.video;
}

loadMovie();