const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
