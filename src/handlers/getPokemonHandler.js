import dom from '../dom.js';
import pokemonData from '../data.js';
import getPokemonById from '../../apis/getPokemonById.js';
import createPokemon from '../components/createPokemon.js';
import updatePokemon from '../components/updatePokemon.js';

const getPokemonHandler = async () => {
    const pokemonExist = document.getElementById('container');

    // if pokemonData.id is the same return
    const id = Number(dom.input.value);
    if (pokemonData.id === id) {
        return;
    }

    if (Number.isNaN(id) || id <= 0) {
        pokemonData.id = null;
        dom.error.innerText = 'Please enter a valid Pokémon ID.';
        dom.root.append(dom.error);
        if (pokemonExist) {
            pokemonExist.remove();
        }
        return;
    }

    const data = await getPokemonById(id);

    if (!data) {
        dom.error.innerText =
            'An error occurred, or the Pokémon was not found.';
        dom.root.append(dom.error);
        if (pokemonExist) {
            pokemonExist.remove();
        }
        return;
    }

    // remove error
    dom.error.remove();
    if (!pokemonExist) {
        const pokemonDom = createPokemon(data);
        dom.root.append(pokemonDom);
    } else {
        updatePokemon(pokemonExist, data);
    }

    // add id to data
    pokemonData.id = id;
};

export default getPokemonHandler;
