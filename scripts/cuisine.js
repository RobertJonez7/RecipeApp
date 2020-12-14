import { fetchData } from '../modules/fetchData.js';
import { getLS, setLS } from '../modules/localStorage.js';
import { getElem } from '../modules/getElem.js';
const API_KEY = '3326d2e61a474c328a9d0fe2d498ad72';

window.onload = () => {
    const data = getLS("cuisine");
    mapItemsToScreen(data);

    setTimeout(() => {
        const cards =  Array.from(getElem('qsa', '.card'));
        console.log(cards);
        cards.forEach(element => {
            const data = element.getAttribute('data-key');
            const title = element.getAttribute('data-title');
            const image = element.getAttribute('data-image');
            element.addEventListener("click", () => { redirectPage(data, title, image) });
        });
    }, 1000);
}

const mapItemsToScreen = async title => {
    getElem('id', 'cuisine-title').innerHTML = title;
    
    const response = await fetchData(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${title}`);
    getElem('id', 'cuisine-container').innerHTML = response.results.map(val =>
        `<div class="card" data-key=${val.id} data-title=${val.title} data-image=${val.image}><img src=${val.image} class="card-pic"><div class="card-title">${val.title}</div></div>`
    ).join('');

    return true;
}

const redirectPage = async (id, title, image) => {
    const response = await fetchData(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`);
    setLS('crtitle', title);
    setLS("crimg", image);
    setLS("cr", response);

    window.location.href = 'cuisine-recipe.html';
}
