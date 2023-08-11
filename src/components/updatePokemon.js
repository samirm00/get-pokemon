import createAbilitiesList from './createAbilitiesList.js';

const updatePokemon = (pokemonDom, pokemonData) => {
    // update name
    const name = pokemonDom.querySelector('#name');
    name.innerText = pokemonData.name;

    // update img
    const img = pokemonDom.querySelector('#img');
    img.src = pokemonData.sprites.front_default;
    img.alt = `${pokemonData.name} Image`;

    const abilitiesList = createAbilitiesList(pokemonData.abilities);
    const oldList = pokemonDom.querySelector('#ability-list');
    oldList.replaceWith(abilitiesList);

    return pokemonDom;
};

export default updatePokemon;
