import { API_BASE } from "./config.js";

async function loadMovies() {
  const res = await fetch(`${API_BASE}/movies`);
  const data = await res.json();
  console.log(data);
}
loadMovies();
