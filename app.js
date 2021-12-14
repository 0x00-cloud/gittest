const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>welcome to my first deployment</h1>`);
});
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "yousef meska",
    errorMessage: "Page not found",
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
