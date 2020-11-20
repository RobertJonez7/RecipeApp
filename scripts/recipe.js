import { fetchData } from '../modules/fetchData.js';
const API_KEY = '3326d2e61a474c328a9d0fe2d498ad72';

window.onload = () => {
    const data = localStorage.getItem("random");
    const parsed = JSON.parse(data);
    console.log(parsed);
    
    mapItemsToScreen(parsed);
}

const mapItemsToScreen = data => {
    document.getElementById('recipe-title').innerHTML = data.title;
    document.getElementById('main-recipe').innerHTML = `<div class="recipe-head"><img src=${data.image} alt=${data.title}</div>`
    document.getElementById('ingredients').innerHTML = data.extendedIngredients.map(val => `<div>${val.original}</div><br>`).join('');
    document.getElementById('instructions').innerHTML = `<div>${data.instructions}</div>`
}
