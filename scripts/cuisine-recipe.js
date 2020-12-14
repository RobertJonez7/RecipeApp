import { getLS } from '../modules/localStorage.js'
import { getElem } from '../modules/getElem.js';

window.onload = () => {
    const info = getLS('cr');
    const data = info[0].steps;
    const title = getLS('crtitle');
    const image = getLS('crimg');

    mapItemsToScreen(data, title, image);
}

const mapItemsToScreen = (data, title, image) => {
    getElem('id', 'recipe-title').innerHTML = title;
    getElem('id', 'main-recipecr').innerHTML = `<div class="recipe-head"><img src=${image} alt=${title}></div>`
    getElem('id', 'ingredient').innerHTML = Object.entries(data).map(val => `<div>${val[1].step}</div><br>`).join('');
}