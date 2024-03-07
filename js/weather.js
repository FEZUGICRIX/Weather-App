import { updateWeatherMarkup } from "./markUp.js";
import { errorMarkUp } from "./error.js";

// API key for accessing OpenWeatherMap API
const APIKey = '31ec11a8529b13bc63ff2fef56f4ade7';

// Root element in the HTML for displaying weather information
const root = document.getElementById('weather__root');

export async function getWeather(store) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=
            ${store.name.trim()}&appid=${APIKey}`
        );

        const data = await response.json();
        
        // Destructuring of the received data
        const {
            name,
            clouds: { all: clouds },
            cod,
            main: { temp, humidity, pressure },
            weather: [{ description, main, icon }],
            wind: { speed },
            sys: { country },
            dt,
            timezone
        } = data;

        // Updating the store with the received weather data
        store = {
            ...store,
            name,
            country,
            clouds,
            temp,
            humidity,
            pressure,
            description,
            main,
            speed,
            dt,
            timezone
        };

        const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        updateWeatherMarkup(url, store); 
    } catch (error) {
        errorMarkUp(store.name);
        console.error(`Error fetching data: ${error}`);
    };
}
