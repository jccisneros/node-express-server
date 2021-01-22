import "dotenv/config";
import express from "express";
import hbs from 'hbs';
import './hbs/helpers'

const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials/');
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
