import html from './main-page.html?raw';
import './main-page.css';
import service from '../../store/store';

/**
 * 
 * @param {HTMLDivElement} appRoot 
 */
export const MainPageComponent = (appRoot) => {
    appRoot.innerHTML += html;

    const cardsRoot = document.querySelector('.cards');

    const searchInput = document.querySelector('.search__input');
    searchInput.addEventListener('keydown', async e => {
        if(e.keyCode === 13) {
            await service.callPokemon(cardsRoot, searchInput.value);
        }
    });
}