import createAbilitiesList from './createAbilitiesList.js';

const updatePokemon = (pokemonData) => {
    const container = document.getElementById('container');
    // update name
    const name = document.getElementById('name');
    name.innerText = pokemonData.name;

    // update img
    const img = document.getElementById('img');
    img.src = pokemonData.sprites.front_default;
    img.alt = `${pokemonData.name} Image`;

    const abilitiesList = createAbilitiesList(pokemonData.abilities);
    const oldList = document.getElementById('ability-list');
    oldList.replaceWith(abilitiesList);

    return container;
};

export default updatePokemon;
