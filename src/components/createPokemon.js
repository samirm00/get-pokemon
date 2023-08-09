import createAbilitiesList from './createAbilitiesList.js';

const createPokemon = (pokemonData) => {
    // container
    const container = document.createElement('div');
    container.className = 'pokemon-container';
    container.id = 'container';

    // Create and append the name
    const name = document.createElement('h2');
    name.innerText = pokemonData.name;
    name.id = 'name';

    // Create and append the image
    const image = document.createElement('img');
    image.src = pokemonData.sprites.front_default;
    image.alt = `${pokemonData.name} Image`;
    image.id = 'img';

    // Create and append the abilities
    const abilitiesHeader = document.createElement('h3');
    abilitiesHeader.innerText = 'Abilities:';
    const abilitiesList = createAbilitiesList(pokemonData.abilities);

    container.append(name, image, abilitiesHeader, abilitiesList);
    return container;
};

export default createPokemon;
