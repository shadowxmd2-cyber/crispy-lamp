import { API_BASE } from "./config.js";

async function loadMovie(id) {
  const res = await fetch(`${API_BASE}/movie/${id}`);
  const data = await res.json();
  console.log(data);
}
