const { Router } = require("express"); //import router from express
const Player = require("./model");
const Team = require("../team/model");
const router = new Router();

router.get("/player", (request, response, next) => {
  Player.findAll()
    .then(list => response.send(list))
    .catch(err => next(err));
});

router.post("/player", (req, res, next) => {
  Player.create(req.body)
    .then(team => res.json(team))
    .catch(error => next(error));
});

router.get("/player/:id", (req, res, next) => {
  const playerId = parseInt(req.params.id);
  Player.findByPk(playerId, { include: [Team, City] })
    .then(player => {
      if (player) {
        res.json(player);
      } else {
        res.status(404).send("User not found!");
      }
    })
    .catch(error => next(error));
});

module.exports = router;
