import html from './main-page.html?raw';
import './main-page.css';
import service from '../../store/store';

/**
 * 
 * @param {HTMLDivElement} appRoot 
 */
export const MainPageComponent = async (appRoot) => {
    appRoot.innerHTML += html;
    const cardsRoot = document.querySelector('.cards');

    service.callPokemon(cardsRoot);

    const searchInput = document.querySelector('.search__input');
    searchInput.addEventListener('keydown', async e => {
        if(e.keyCode === 13) {
            await service.callPokemon(cardsRoot, searchInput.value);
        }
        if(e.keyCode === 8 && searchInput.value.length === 1) {
            let { length } = service.getPokemons();
            if(!length || length === 1) {
                await service.callPokemon(cardsRoot);
            }
        }
    });
}