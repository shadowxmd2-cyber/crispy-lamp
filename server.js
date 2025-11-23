import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

// ---- Cineru API Base ----
const API_KEY = "dda4ae136624f95538d55df41565bb3c4c4df5502ef008ad7259e31171df1afb";
const BASE = "https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/cineru";

// Home route
app.get("/", (req, res) => {
  res.send("SubMovies LK API is Running...");
});

// -----------------------------
// 🔍 SEARCH MOVIES
// -----------------------------
app.get("/api/search", async (req, res) => {
  try {
    const q = req.query.q;
    if (!q) return res.json({ error: "Query missing" });

    const url = `${BASE}/search?apiKey=${API_KEY}&query=${q}`;
    const data = await fetch(url).then(r => r.json());

    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Search failed" });
  }
});

// -----------------------------
// 🎬 MOVIE DETAILS
// -----------------------------
app.get("/api/movie", async (req, res) => {
  try {
    const movieUrl = req.query.url;
    if (!movieUrl) return res.json({ error: "Movie URL missing" });

    const url = `${BASE}/movie?apiKey=${API_KEY}&url=${movieUrl}`;
    const data = await fetch(url).then(r => r.json());

    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Movie details failed" });
  }
});

// -----------------------------
// 📺 TV SHOW DETAILS
// -----------------------------
app.get("/api/tvshow", async (req, res) => {
  try {
    const showUrl = req.query.url;
    if (!showUrl) return res.json({ error: "TV Show URL missing" });

    const url = `${BASE}/tvshow?apiKey=${API_KEY}&url=${showUrl}`;
    const data = await fetch(url).then(r => r.json());

    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "TV show details failed" });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
