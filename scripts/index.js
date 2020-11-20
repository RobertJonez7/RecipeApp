import { fetchData } from '../modules/fetchData.js';
const API_KEY = '3326d2e61a474c328a9d0fe2d498ad72';

window.onload = () => {
    mapTodaysPicks();
    mapCuisines();

    document.getElementById("random").addEventListener("click", getRandomRecipe);
}

const cuisineArray = [
    {
        title: "American",
        image: 'assets/american.jpg'
    },
    {
        title: "Latin American",
        image: 'assets/latin-america.jpg'
    },
    {
        title: "Italian",
        image: 'assets/italian.jpg'
    },
    {
        title: "Chinese",
        image: 'assets/chinese.jpg'
    },
    {
        title: "Mediterranean",
        image: 'assets/mediterranean.png'
    },
    {
        title: "Indian",
        image: 'assets/indian.jpg'
    },
];


const mapTodaysPicks = async() => {
    //const data = await fetchData('https://api.spoonacular.com/recipes/complexSearch?cuisine=italian&apiKey=3326d2e61a474c328a9d0fe2d498ad72');
    const data = await fetchData(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`);
    console.log(data)
    const todaysPicks = data.results.slice(0, 6);
    document.getElementById('todaysPicks').innerHTML = todaysPicks.map(val => 
        `<div class="card"><img src=${val.image} class="card-pic"><div class="card-title">${val.title}</div></div>`
    ).join('');
}

const mapCuisines = () => {
    document.getElementById("cuisines").innerHTML = cuisineArray.map(val =>
        `<div class="card"><img src=${val.image} class="card-pic"><div class="card-title">${val.title}</div></div>`
    ).join('');
}

const getRandomRecipe = async () => {
    const data = await fetchData(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`);
    localStorage.setItem("random", JSON.stringify(data.recipes[0]));
    window.location.href = 'Views/recipes.html';
}
