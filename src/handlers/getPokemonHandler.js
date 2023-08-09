import dom from '../dom.js';
import getPokemonById from '../../apis/getPokemonById.js';
import createPokemon from '../components/createPokemon.js';
import updatePokemon from '../components/updatePokemon.js';

const getPokemonHandler = async () => {
    const pokemonExist = document.getElementById('container');

    const id = Number(dom.input.value);
    if (Number.isNaN(id) || id <= 0) {
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
        updatePokemon(data);
    }
};

export default getPokemonHandler;
