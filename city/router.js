const { Router } = require("express"); //import router from express
const City = require("./model");
const router = new Router();

router.get("/city", (request, response, next) => {
  City.findAll()
    .then(list => response.send(list))
    .catch(err => next(err));
});

router.post("/city", (req, res, next) => {
  City.create(req.body)
    .then(city => res.json(city))
    .catch(error => next(error));
});

router.get("/city/:id", (req, res, next) => {
  const cityId = parseInt(req.params.id);
  City.findByPk(cityId)
    .then(city => {
      if (city) {
        res.json(city);
      } else {
        res.status(404).send("User not found!");
      }
    })
    .catch(error => next(error));
});

module.exports = router;
