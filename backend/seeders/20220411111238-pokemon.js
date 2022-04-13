"use strict";
const scraper = require("../helpers/scraper");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await scraper.getData().then(async (data) => {
      for (let pokemon of data) {
        await queryInterface.bulkInsert(
          "Pokemons",
          [
            {
              number: pokemon.number,
              name: pokemon.name,
              type: pokemon.type,
              category: pokemon.category,
              description: pokemon.description,
            },
          ],
          {}
        );
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Pokemons", null, {});
  },
};
