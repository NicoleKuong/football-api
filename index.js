const express = require("express");
// const db = require("./db");
// const Team = require("./team/model");
// const Player = require("./player/model");
const teamRouter = require("./team/router");
const playerRouter = require("./player/router");
const cityRouter = require("./city/router");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 4000;

const jsonParser = bodyParser.json();
app.use(jsonParser); // app.use(express.json()) - you can use this now instead of the body parser
app.use(teamRouter); //app.use("/team", teamRouter); - no need to specifiy in the router.js
app.use(playerRouter);
app.use(cityRouter);

app.listen(port, () => console.log(`This app is listening on port ${port}`));
