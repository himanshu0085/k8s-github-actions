const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, I'm Himanshu 👋 — Deployed on Kubernetes via GitHub Actions 🚀");
});

app.listen(port, () => console.log(`Server running on port ${port}`));

