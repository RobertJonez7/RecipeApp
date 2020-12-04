import { getLS } from '../modules/localStorage.js'
import { getElem } from '../modules/getElem.js';

window.onload = () => {
    const data = getLS('random');
    mapItemsToScreen(data);
}

const mapItemsToScreen = data => {
    getElem('id', 'recipe-title').innerHTML = data.title;
    getElem('id', 'main-recipe').innerHTML = `<div class="recipe-head"><img src=${data.image} alt=${data.title}</div>`
    getElem('id', 'ingredients').innerHTML = data.extendedIngredients.map(val => `<div>${val.original}</div><br>`).join('');
    getElem('id', 'instructions').innerHTML = `<div>${data.instructions}</div>`
}
