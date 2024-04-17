import service from '../store/store';
import '../../pokemon/presentation/pokemon-card/pokemon-card.css';

/**
 * 
 * @param {HTMLDivElement} cardsDiv
 * @param {Array<{}>} pokemons 
 */
export const renderPokemons = (cardsDiv, pokemons) => {
    cardsDiv.innerHTML = '';
    const capitalize = (str) => str[0].toUpperCase() + str.substring(1);
    pokemons.forEach(pokemon => {
        let name = '';
        if(pokemon.hasOwnProperty('name')) {
            name = capitalize(pokemon.name);
        } else name = capitalize(pokemon.forms[0].name);

        cardsDiv.innerHTML += `<div class="card">
        <figure>
            <img class="card__image" src="https://raw.githubusercontent.com/SamHerbert/SVG-Loaders/5deed925369e57e9c58ba576ce303466984db501/svg-loaders/oval.svg" alt="Planet">
        </figure>
        <div class="card__texts">
            <h4 class="card__title">${name}</h4>
        </div>
    </div>`;
    });
}