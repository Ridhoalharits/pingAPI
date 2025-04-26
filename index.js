const express = require("express");
const app = express();
const pool = require("./db");

// Middleware supaya bisa baca JSON body
app.use(express.json());

// GET semua mahasiswa
app.get("/students", async (req, res) => {
  try {
    const result = await pool.query("SELECT nim, nama FROM mahasiswa");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST untuk tambah mahasiswa baru
app.post("/students", async (req, res) => {
  try {
    const { nim, nama } = req.body;
    if (!nim || !nama) {
      return res.status(400).json({ error: "NIM dan Nama harus diisi" });
    }

    const result = await pool.query(
      "INSERT INTO mahasiswa (nim, nama) VALUES ($1, $2) RETURNING *",
      [nim, nama]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
