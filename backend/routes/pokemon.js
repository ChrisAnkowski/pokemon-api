const router = require("express").Router();
const {
  getAllPokemon,
  getPokemonByNameOrNumber,
  getRandomPokemon,
} = require("../controllers/pokemon");

router.get("/pokemon", getAllPokemon);
router.get("/pokemon/:nameOrNumber", getPokemonByNameOrNumber);
router.get("/random", getRandomPokemon);

module.exports = router;
