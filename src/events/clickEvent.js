import dom from '../dom.js';
import getPokemonHandler from '../handlers/getPokemonHandler.js';

const clickEvent = () => {
    dom.btn.addEventListener('click', getPokemonHandler);
};

export default clickEvent;
