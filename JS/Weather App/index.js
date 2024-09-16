const weatherForm = document.querySelector("#weather");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "71f3a57e2d1cd9e7082c93e9520669a0";
const body = document.body;

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            displayError("Unable to retrieve weather data. Please try again.");
        }
    } else {
        displayError("Please enter a city.");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Failed to fetch weather data.");
    }

    const data = await response.json();
    return data;
}

function displayWeatherInfo(data) {
    const { name, main, weather } = data;
    const temp = main.temp;
    const weatherDescription = weather[0].description;
    const weatherId = weather[0].id;

    card.innerHTML = `
        <h2>${name}</h2>
        <p class="tempDisplay">${temp.toFixed(1)}°C</p>
        <p>${getWeatherEmojiAndChangeBackground(weatherId)} ${weatherDescription}</p>
    `;
    card.style.display = "flex";
}

function getWeatherEmojiAndChangeBackground(weatherId) {
    if (weatherId >= 200 && weatherId < 300) {
        body.style.backgroundColor = "#4d4d4d";
        return "⛈️";
    } else if (weatherId >= 300 && weatherId < 600) {
        body.style.backgroundColor = "#607d8b";
        return "🌧️";
    } else if (weatherId >= 600 && weatherId < 700) {
        body.style.backgroundColor = "#b0e0e6";
        return "❄️";
    } else if (weatherId >= 700 && weatherId < 800) {
        body.style.backgroundColor = "#cccccc";
        return "🌫️";
    } else if (weatherId === 800) {
        body.style.backgroundColor = "#ffffe0";
        return "☀️";
    } else if (weatherId > 800) {
        body.style.backgroundColor = "#90a4ae";
        return "☁️";
    }
    body.style.backgroundColor = "#ffffff";
    return "❓";
}

function displayError(message) {
    card.innerHTML = `<p class="errorDisplay">${message}</p>`;
    card.style.display = "flex";
}
