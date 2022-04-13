const Pokemon = require("../models").Pokemon;

module.exports = {
  getAllPokemon: (req, res) => {
    Pokemon.findAll({
      attributes: ["id", "number", "name", "type", "category"],
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
  getPokemonByName: (req, res) => {
    let name = req.params.name;

    Pokemon.findOne({
      where: {
        name: name,
      },
    })
      .then((pokemon) => {
        return res.status(200).json({ pokemon });
      })
      .catch((err) => {
        return res.status(400).json({ err });
      });
  },
};
