import { fetchData } from '../modules/fetchData.js';
const API_KEY = '3326d2e61a474c328a9d0fe2d498ad72';

window.onload = () => {
    const data = localStorage.getItem("cuisine");
    mapItemsToScreen(data);
}

const mapItemsToScreen = data => {
    document.getElementById('cuisine-title').innerHTML = data;
}
