const fetchModule = require("isomorphic-fetch");
const { createWriteStream } = require("fs");

async function fetchPokemonData() {
  const response = await fetchModule(
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
  );
  const arrayBuffer = await response.arrayBuffer();

  const buffer = Buffer.from(arrayBuffer);

  const writeStream = createWriteStream("./pokemon.json");
  writeStream.write(buffer);
}

fetchPokemonData();
