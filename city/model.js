const Sequelize = require("sequelize");
const db = require("../db");

const City = db.define(
  "city",
  {
    name: {
      type: Sequelize.STRING,
      field: "city_name"
    },
    population: {
      type: Sequelize.INTEGER,
      field: "population_number"
    }
  },
  {
    tableName: "football_cities"
  }
);

module.exports = City;
