import { fetchData } from '../modules/fetchData.js';
import { setLS } from '../modules/localStorage.js';
const API_KEY = '3326d2e61a474c328a9d0fe2d498ad72';

const randomSearch = async () => {
    const data = await fetchData(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`);
    setLS("random", data.recipes[0]);

    window.location.href = 'Views/recipes.html';
}

export { randomSearch };