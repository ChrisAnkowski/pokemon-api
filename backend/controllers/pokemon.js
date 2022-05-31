const db = require("../models");
const Pokemon = require("../models").Pokemon;

module.exports = {
  getAllPokemon: (req, res) => {
    Pokemon.findAll({
      // limit: 10,
      order: [["id", "ASC"]],
    })
      .then((pokemon) => {
        return res.status(200).json({
          pokemon,
        });
      })
      .catch((err) => {
        return res.status(400).json({ err });
      });
  },
  getPokemonByNameOrNumber: (req, res) => {
    let param = req.params.nameOrNumber;
    let options = {
      where: {
        name: param,
      },
    };
    if (!isNaN(param)) {
      options = { where: { number: param } };
    }

    Pokemon.findOne(options)
      .then((pokemon) => {
        return res.status(200).json({ pokemon });
      })
      .catch((err) => {
        return res.status(400).json({ err });
      });
  },
  getRandomPokemon: (req, res) => {
    Pokemon.findAll({
      order: db.sequelize.random(),
      limit: 1,
    })
      .then((pokemon) => {
        return res.status(200).json({ pokemon });
      })
      .catch((err) => {
        return res.status(400).json({ err });
      });
  },
};
