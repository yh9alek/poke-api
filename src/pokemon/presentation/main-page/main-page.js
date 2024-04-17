import html from './main-page.html?raw';
import './main-page.css';

/**
 * 
 * @param {HTMLDivElement} appRoot 
 */
export const MainPageComponent = (appRoot) => {
    appRoot.innerHTML += html;
}