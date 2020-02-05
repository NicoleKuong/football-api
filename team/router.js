const { Router } = require("express"); //import router from express
const Team = require("./model");
const router = new Router();

router.get("/team", (request, response, next) => {
  Team.findAll()
    .then(list => response.send(list))
    .catch(err => next(err));
});

router.post("/team", (req, res, next) => {
  // const { team_name } = req.body;
  Team.create(req.body)
    .then(team => res.json(team))
    .catch(error => next(error));
});

router.get("/team/:id", (req, res, next) => {
  const teamId = parseInt(req.params.id);
  Team.findByPk(teamId, { include: [City] })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).send("User not found!");
      }
    })
    .catch(error => next(error));
});

module.exports = router;
