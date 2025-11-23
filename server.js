import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const API_KEY = "dda4ae136624f95538d55df41565bb3c4c4df5502ef008ad7259e31171df1afb";
const BASE = "https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/cineru";

app.get("/", (req, res) => {
  res.send("SubMovies LK API Working on Render 🚀");
});

// SEARCH
app.get("/api/search", async (req, res) => {
  try {
    const q = req.query.q;
    if (!q) return res.json({ error: "Missing query" });

    const url = `${BASE}/search?apiKey=${API_KEY}&query=${q}`;
    const data = await fetch(url).then(r => r.json());
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Search failed", details: err.message });
  }
});

// MOVIE DETAILS
app.get("/api/movie", async (req, res) => {
  try {
    const urlParam = req.query.url;
    if (!urlParam) return res.json({ error: "Missing movie URL" });

    const url = `${BASE}/movie?apiKey=${API_KEY}&url=${urlParam}`;
    const data = await fetch(url).then(r => r.json());
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Movie fetch failed", details: err.message });
  }
});

// TV SHOW DETAILS
app.get("/api/tvshow", async (req, res) => {
  try {
    const urlParam = req.query.url;
    if (!urlParam) return res.json({ error: "Missing tvshow URL" });

    const url = `${BASE}/tvshow?apiKey=${API_KEY}&url=${urlParam}`;
    const data = await fetch(url).then(r => r.json());
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "TV fetch failed", details: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
