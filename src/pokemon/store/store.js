import { renderPokemon } from "../use-cases";

const state = {
    pokemons: [],
};

/**
 * @param {HTMLDivElement} cardsRoot
 * @param {string} name 
 */
const callPokemon = async (cardsRoot, name) => {
    state.pokemons = [];
    cardsRoot.innerHTML = '';
    let url = import.meta.env.VITE_API_URL;

    name = name ? 
           name.toLowerCase() : 
           name;

    url += name ? 
           `/${name}` : 
           '?limit=50';

    let resp = await fetch(url);
    let data = await resp.json();

    if(data.hasOwnProperty('results')) {
        data.results.forEach( async result => {
            resp = await fetch(result.url);
            data = await resp.json();
            state.pokemons.push(data);
            renderPokemon(cardsRoot, data);
        });
    } else {
        state.pokemons.unshift(data);
        renderPokemon(cardsRoot, data);
    }
}

const getPokemons = () => {
    return [...state.pokemons];
}

export default {
    callPokemon,
    getPokemons,
};