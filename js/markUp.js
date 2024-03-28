const root = document.getElementById('weather__root');

export const updateWeatherMarkup = (url, store) => {
    root.innerHTML = `
    <!-- Weather Location -->
    <div class="weather__location">
        <div class="weather__location__city">
            ${store.name}, ${store.country}
        </div>
        <div class="weather__location__temperature">
            ${Math.round(store.temp - 273)}&#176
        </div>
    </div>

    <!-- Weather Main -->
    <div class="weather__main">
        <div class="weather__main-conditions conditions">
            <img class="conditions__image" src="${url}" alt="weather">
            <div class="conditions__description">
                ${store.description}
            </div>
        </div>

        <div class="weather__main__info info">
            <ul class="info__list">
                <li class="info__item item">
                    <div class="item__info">
                        <div class="item__title">
                            ${(store.speed).toFixed(1)} m/s
                        </div>
                        <div class="item__value">wind speed</div>
                    </div>
                    <img src="./images/weather-characteristics/wind.svg" alt="wind" class="item__img">
                </li>
                <li class="info__item item">
                    <div class="item__info">
                        <div class="item__title">${store.humidity}%</div>
                        <div class="item__value">humidity</div>
                    </div>
                    <img src="./images/weather-characteristics/humidity.svg" alt="wind" class="item__img">
                </li>
                <li class="info__item item">
                    <div class="item__info">
                        <div class="item__title">${store.clouds}%</div>
                        <div class="item__value">cloudcover</div>
                    </div>
                    <img src="./images/weather-characteristics/cloudcover.svg" alt="wind" class="item__img">
                </li>
                <li class="info__item item">
                    <div class="item__info">
                        <div class="item__title">${store.pressure}hPa</div>
                        <div class="item__value">pressure</div>
                    </div>
                    <img src="./images/weather-characteristics/pressure.svg" alt="wind" class="item__img">
                </li>
            </ul>
        </div>
    </div>
    `;
};
