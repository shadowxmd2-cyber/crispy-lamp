import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const API_BASE = "https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api";

app.get("/api/*", async (req, res) => {
  try {
    const url = API_BASE + req.url.replace("/api", "");
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy failed", details: err.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
