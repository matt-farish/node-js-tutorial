const path = require('path');

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const gamesRoutes = require("./routes/games");
const photosRoutes = require("./routes/photos")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(gamesRoutes);
app.use(photosRoutes)

app.listen(3000);