const router = require("express").Router();
const {
  getAllPokemon,
  getPokemonByName,
  getRandomPokemon,
} = require("../controllers/pokemon");

router.get("/pokemon", getAllPokemon);
router.get("/pokemon/:name", getPokemonByName);
router.get("/random", getRandomPokemon);

module.exports = router;
