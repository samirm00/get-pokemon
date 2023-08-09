/**
 * @jest-environment jsdom
 */

import updatePokemon from './updatePokemon.js';

describe('createPokemon', () => {
    let container, firstChild, secondChild, thirdChild, forthChild;
    const pokemonData = {
        name: 'Pikachu',
        sprites: { front_default: 'image_url' },
        abilities: [
            { ability: { name: 'static' } },
            { ability: { name: 'lightning-rod' } },
        ],
    };

    beforeEach(() => {
        // Setup initial DOM
        document.body.innerHTML = `
          <div class="pokemon-container" id="container">
            <h2 id="name">Old Name</h2>
            <img id="img" src="old_image_url" alt="Old Image">
            <h3>Abilities:</h3>
            <ul id="ability-list"></ul>
          </div>
        `;

        container = updatePokemon(pokemonData);
        firstChild = container.children[0];
        secondChild = container.children[1];
        thirdChild = container.children[2];
        forthChild = container.children[3];
    });

    test('container nodeName -> DIV', () => {
        expect(container.nodeName).toEqual('DIV');
    });

    test('container className -> pokemon-container', () => {
        expect(container.className).toEqual('pokemon-container');
    });

    test('container id ->  container', () => {
        expect(container.id).toEqual('container');
    });

    test('firstChild nodeName -> H2', () => {
        expect(firstChild.nodeName).toEqual('H2');
    });

    test('firstChild innerText -> Pikachu', () => {
        expect(firstChild.innerText).toEqual('Pikachu');
    });

    test('firstChild id -> name', () => {
        expect(firstChild.id).toEqual('name');
    });

    test('secondChild nodeName -> IMG', () => {
        expect(secondChild.nodeName).toEqual('IMG');
    });

    test('secondChild src -> "http://localhost/image_url"', () => {
        expect(secondChild.src).toEqual('http://localhost/image_url');
    });

    test('secondChild alt -> "Pikachu Image"', () => {
        expect(secondChild.alt).toEqual('Pikachu Image');
    });

    test('secondChild id -> img', () => {
        expect(secondChild.id).toEqual('img');
    });

    test('thirdChild nodeName -> H3', () => {
        expect(thirdChild.nodeName).toEqual('H3');
    });

    test('forthChild nodeName -> UL', () => {
        expect(forthChild.nodeName).toEqual('UL');
    });

    test('forthChild childElementCount -> 2', () => {
        expect(forthChild.childElementCount).toEqual(2);
    });
});
