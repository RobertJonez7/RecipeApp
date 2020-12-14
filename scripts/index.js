import { randomSearch } from '../modules/randomSearch.js';
import { cuisineArray } from './cuisineArray.js';
import { setLS } from '../modules/localStorage.js'; 
import { getElem } from '../modules/getElem.js';

window.onload = () => {
    mapCuisines();

    getElem('id', 'random').addEventListener('click', randomSearch);
    getElem('id', 'search').addEventListener('click', activateSearch);

    const cards =  Array.from(getElem('qsa', '.card'));
    cards.forEach(element => {
        const data = element.getAttribute('data-key');
        element.addEventListener("click", () => { redirectPage(data) });
    });
}


const mapCuisines = () => {
    document.getElementById("cuisines").innerHTML = cuisineArray.map(val =>
        `<div class="card" data-key=${val.title}><img src=${val.image} class="card-pic"><div class="card-title">${val.title}</div></div>`
    ).join('');
}

const redirectPage = data => {
    setLS("cuisine", data);
    window.location.href = 'Views/cuisine.html';
}

const activateSearch = () => {
    const searchbar = document.getElementById("searchbar");
    searchbar.style.visibility === 'visible' ? searchbar.style.visibility = 'hidden' : searchbar.style.visibility = 'visible';
}


