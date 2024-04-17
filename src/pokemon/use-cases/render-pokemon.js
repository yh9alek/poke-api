import '../../pokemon/presentation/pokemon-card/pokemon-card.css';

/**
 * 
 * @param {HTMLDivElement} cardsDiv
 * @param {Array<{}>} pokemons 
 */
export const renderPokemon = (cardsDiv, pokemon) => {
    const capitalize = (str) => str[0].toUpperCase() + str.substring(1);

    let name = capitalize(pokemon.name);


    cardsDiv.innerHTML += `<div class="card ${name}">
        <figure>
            <img class="card__image" src="${pokemon.sprites.front_default}" alt="Planet">
        </figure>
        <div class="card__texts">
            <h4 class="card__title">${name}</h4>
        </div>
    </div>`;

    document.querySelector(`.card.${name}`)
    .addEventListener('click', e => {
        console.log(e);
    });
}