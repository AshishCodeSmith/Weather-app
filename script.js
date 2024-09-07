const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city) {
    const api_key = "f3336e9d988380e8cffde6a88ac9c54c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(url).then(response => response.json());
    console.log(weather_data);
if(weather_data.cod === '404')
{
    console.log("error");
    return;
}
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = weather_data.weather[0].description;
    humidity.innerHTML = `Humidity: ${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `Wind Speed: ${weather_data.wind.speed} m/s`;

    switch (weather_data.weather[0].main) {
        case 'Rain':
            weather_img.src = "/assets/rain.jpeg";
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.jpeg";
            break;
        case 'Clear':
            weather_img.src = "/assets/weather-clear.svg.png";
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.jpeg";
            break;
        default:
            weather_img.src = "/assets/default-weather.png"; // Fallback image
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
