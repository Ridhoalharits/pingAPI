const express = require("express");
const pool = require("./db");

const app = express();
const port = 3000;

// Endpoint GET /students
app.get("/students", async (req, res) => {
  try {
    const result = await pool.query("SELECT nim, nama FROM mahasiswa");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
