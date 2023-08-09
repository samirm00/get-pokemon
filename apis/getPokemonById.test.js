import getPokemonById from './getPokemonById.js';

describe('getPokemonById', () => {
    // Setup fetch as a mock function before each test
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    // Clear all mocks after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('fetches Pokémon successfully', async () => {
        const fakePokemon = { name: 'Pikachu' };
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(fakePokemon),
        });

        const result = await getPokemonById(1);
        expect(result).toEqual(fakePokemon);
    });

    test('returns null for non-ok response', async () => {
        global.fetch.mockResolvedValueOnce({
            ok: false,
            status: 500,
            json: () => Promise.resolve({}),
        });

        const result = await getPokemonById(1);
        expect(result).toBeNull();
    });

    test('handles fetch error', async () => {
        const consoleErrorSpy = jest
            .spyOn(console, 'error')
            .mockImplementation(() => {});
        global.fetch.mockRejectedValueOnce(new Error('Fetch failed'));

        const result = await getPokemonById(1);
        expect(result).toBeNull();
        expect(consoleErrorSpy).toHaveBeenCalledWith(
            'There was an error fetching the Pokémon:',
            new Error('Fetch failed'),
        );

        // Restore console.error to its original implementation
        consoleErrorSpy.mockRestore();
    });
});
