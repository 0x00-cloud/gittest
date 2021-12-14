const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
const PORT = process.env.PORT || 3000;
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);
app.use(express.static(publicDirectoryPath));
app.get("/", (req, res) => {
  res.render("index", {
    body: "welcome",
    title: "home",
    name: "yousef meska",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "yousef meska",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    name: "yousef meska",
    title: "About",
  });
});
app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Egypt",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "yousef meska",
    errorMessage: "Help Article not Found",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "yousef meska",
    errorMessage: "Page not Found",
  });
});
app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});
