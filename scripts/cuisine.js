import { fetchData } from '../modules/fetchData.js';
const API_KEY = '3326d2e61a474c328a9d0fe2d498ad72';

window.onload = () => {
    const data = localStorage.getItem("cuisine");
    const parsed = JSON.parse(data);

    mapItemsToScreen(parsed);
}

const mapItemsToScreen = async title => {
    document.getElementById('cuisine-title').innerHTML = title;
    
    const response = await fetchData(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${title}`);
    document.getElementById("cuisine-container").innerHTML = response.results.map(val =>
        `<div class="card" data-key=${val.title}><img src=${val.image} class="card-pic"><div class="card-title">${val.title}</div></div>`
    ).join('');
}
