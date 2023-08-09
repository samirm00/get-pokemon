const getPokemonById = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!res.ok) {
            throw new Error(`An error has occurred: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (err) {
        console.error('There was an error fetching the Pokémon:', err);
        return null;
    }
};

export default getPokemonById;
