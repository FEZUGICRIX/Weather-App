import { getWeather } from "./weather.js";

// Initial state for storing weather information
export let store = {
    name: 'Dubai', // Default city set to Dubai for initial display
    country: "AE",
    clouds: 0,
    temp: 0,
    humidity: 0,
    pressure: 0,
    description: 0,
    main: 0,
    speed: 0
};

const cityInput = document.getElementById('city');
const searchButton  = document.querySelector('.search__btn');

searchButton .addEventListener('click', (event) => {
    event.preventDefault();
    store.name = cityInput.value; // Updating the city in the store based on user input
    store.name !== "" ? getWeather(store) : {};
});

store.name !== "" ? getWeather(store) : {};