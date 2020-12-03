import { fetchData } from '../modules/fetchData.js';
const API_KEY = '3326d2e61a474c328a9d0fe2d498ad72';

window.onload = () => {
    //mapTodaysPicks();
    mapCuisines();

    document.getElementById("random").addEventListener("click", getRandomRecipe);

    const cards =  Array.from(document.querySelectorAll('.card'));
    cards.forEach(element => {
        const data = element.getAttribute('data-key');
        element.addEventListener("click", () => { redirectPage(data) });
    });
}

const cuisineArray = [
    {
        title: "American",
        image: 'assets/american.jpg'
    },
    {
        title: "Mexican",
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


// const mapTodaysPicks = async() => {
//     const data = await fetchData(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`);
//     const todaysPicks = data.results.slice(0, 6);
//     document.getElementById('todaysPicks').innerHTML = todaysPicks.map(val => 
//         `<div class="card"><img src=${val.image} class="card-pic"><div class="card-title">${val.title}</div></div>`
//     ).join('');
// }

const mapCuisines = () => {
    document.getElementById("cuisines").innerHTML = cuisineArray.map(val =>
        `<div class="card" data-key=${val.title}><img src=${val.image} class="card-pic"><div class="card-title">${val.title}</div></div>`
    ).join('');
}

const getRandomRecipe = async () => {
    const data = await fetchData(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`);
    localStorage.setItem("random", JSON.stringify(data.recipes[0]));
    window.location.href = 'Views/recipes.html';
}

const redirectPage = data => {
    localStorage.setItem("cuisine", JSON.stringify(data));
    window.location.href = 'Views/cuisine.html';
}

