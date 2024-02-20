const root = document.getElementById('weather__root');

export const errorMarkUp = (city) => {
    root.innerHTML = `
        <div class="weather__error error">
            <img src="./images/error.png" alt="error" class="error__img">
            <h1 class="error__title">
                City
                <span class="error__city">
                    "${city}" 
                </span>
                not found
            </h1>
        </div>
    `;
}