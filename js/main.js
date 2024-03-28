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

const searchForm = document.getElementById('search__form');
const cityInput = document.getElementById('city');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Updating the city in the store based on user input
    store.name = cityInput.value;
    store.name !== "" ? getWeather(store) : {};
});

// Triggering weather retrieval if the city is not empty
store.name !== "" ? getWeather(store) : {};
