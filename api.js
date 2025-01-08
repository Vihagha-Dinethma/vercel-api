const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.send("Express on Vercel api");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;