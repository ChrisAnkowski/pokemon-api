const router = require("express").Router();
const { getAllPokemon, getPokemonByName } = require("../controllers/pokemon");

router.get("/pokemon", getAllPokemon);
router.get("/pokemon/:name", getPokemonByName);

module.exports = router;
