const fetch = require("node-fetch");
const cheerio = require("cheerio");
const pokemonUrl = "https://de.wikipedia.org/wiki/Liste_der_Pok%C3%A9mon";
const descriptionUrl = "https://www.pokewiki.de";

// GET BESCHREIBUNG
// var text = [];
// jQuery('.mw-parser-output').children(':not(table)').each((i, e) => {
//   let foo = false;
//   if (e.nodeName === 'P') {
//     text.push(e);
//     if ($(e).next().prop("nodeName") !== 'P') {
//       foo = true;
//     }
//   }
//   if (foo) {
//     return false;
//   }
// });
// console.log(text);

async function getData() {
    let pokemon = [];
    return await fetch(pokemonUrl)
        .then((data) => data.text())
        .then((body) => {
            const $ = cheerio.load(body);
            $(".wikitable tbody tr").each(function () {
                let number = $(this).find("td:nth-child(1)").text();
                let name_german = $(this).find("td:nth-child(2)").text();
                let type = $(this)
                    .find("td:nth-child(9)")
                    .text()
                    .replace(/\[.*\]/gm, "");
                let category = $(this)
                    .find("td:nth-child(10)")
                    .text()
                    .replace(/\[.*\]/gm, "")
                    .replace("\n", "");


                let tempPokemonObject = {
                    number,
                    name: name_german,
                    type,
                    category
                };
                pokemon.push(tempPokemonObject);
            });
            return pokemon;
        })
        .then((data) => {
            return data.filter((element) => {
                for (const [, value] of Object.entries(element)) {
                    return !!value;
                }
            });
        }).then(async (data) => {
            for (let i = 0; i < data.length; i++) {
                let currentPokemon = data[i];
                await getDescription(currentPokemon.name).then((text) => {
                    Object.assign(currentPokemon, {description: text[0]});
                });
                console.log(currentPokemon)
            }
            return data;
        });
}

async function getDescription(name) {
    let fullDescriptionUrl = `${descriptionUrl}/${name}`;
    if (fullDescriptionUrl === `${descriptionUrl}/`) {
        return
    }
    return await fetch(fullDescriptionUrl)
        .then((data) => data.text())
        .then((body) => {
            const text = [];
            const $ = cheerio.load(body);
            $('.mw-parser-output').children(':not(table)').each((i, e) => {
              let notP = false;
              if ($(e).get(0).name.toLowerCase() === 'p') {
                text.push($(e).text());
                if ($(e).next().get(0).name.toLowerCase() !== 'p') {
                  notP = true;
                }
              }
              if (notP) {
                return false;
              }
            });
            const wrappedText = [];
            for (let i = 0; i < text.length; i++) {
                wrappedText.push('<p>' + text[i].replace(/(\r\n|\n|\r)/gm, "").replace(/ *\[[^\]]*]/, '') + '</p>' );
            }
            return wrappedText.concat('');
        })
}

getData();

module.exports = {getData};
