import { fetchData } from '../modules/fetchData.js';
import { getLS } from '../modules/localStorage.js';
import { getElem } from '../modules/getElem.js';
const API_KEY = '3326d2e61a474c328a9d0fe2d498ad72';

window.onload = () => {
    const data = getLS("cuisine");
    mapItemsToScreen(data);
}

const mapItemsToScreen = async title => {
    getElem('id', 'cuisine-title').innerHTML = title;
    
    const response = await fetchData(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${title}`);
    getElem('id', 'cuisine-container').innerHTML = response.results.map(val =>
        `<div class="card" data-key=${val.id}><img src=${val.image} class="card-pic"><div class="card-title">${val.title}</div></div>`
    ).join('');
}

const redirectPage = data => {
    //console.log(data)
}
