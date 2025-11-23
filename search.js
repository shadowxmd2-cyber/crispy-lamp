import { API_BASE } from "./config.js";

async function searchMovies(q) {
  const res = await fetch(`${API_BASE}/search?q=${q}`);
  const data = await res.json();
  console.log(data);
}
