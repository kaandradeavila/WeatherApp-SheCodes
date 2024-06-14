function capitalizeWords(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function displayWeatherTemperature(currentTemperature){
    let currentTemperatureElement = document.querySelector("#weather-temp");
    currentTemperatureElement.innerHTML = Math.round(currentTemperature);
}

function displayWeatherCondition(description){
    let weatherDescriptionElement = document.querySelector("#weather-description");
    weatherDescriptionElement.innerHTML = capitalizeWords(description);
}

function displayWeatherIcon(icon, description){
    let weatherIconElement = document.querySelector("#weather-icon");
    weatherIconElement.src = icon;
    weatherIconElement.alt = `${description} icon`;
}

function displayWeatherDay(dateTime){
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let day = days[dateTime.getDay()];

    let currentDayElement = document.querySelector("#current-day");
    currentDayElement.innerHTML = day;
}

function displayDate(dateTime){
    let dayNumber = dateTime.getDate();

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let month = months[dateTime.getMonth()];

    let year = dateTime.getYear() + 1900;

    let currentDateElement = document.querySelector("#current-date");
    currentDateElement.innerHTML = `${month} ${dayNumber}, ${year}`;
}

function displayTime(dateTime){
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let timeDay = 'AM';

    if (hours > 11) {
        timeDay = 'PM';
    }

    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (minutes < 10){
        minutes = `0${minutes}`;
    }

    let currentTimeElement = document.querySelector("#current-time");
    currentTimeElement.innerHTML = `${hours}:${minutes} ${timeDay}`;
}

function parseTimestamp(timestamp){
    let dateTime = new Date (timestamp * 1000)

    displayTime(dateTime);
    displayDate(dateTime);
    displayWeatherDay(dateTime);
}

function displayWind(wind){
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = `${wind} `
}

function displayHumidity(humidity){
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${humidity}%`
}

function getData(response){
    let currentTemperature = response.data.temperature.current;
    let weatherDescription = response.data.condition.description;
    let iconUrl = response.data.condition.icon_url;
    let timestamp = response.data.time;
    let humidity = response.data.temperature.humidity;
    let wind = response.data.wind.speed;

    displayWeatherTemperature(currentTemperature);
    displayWeatherCondition(weatherDescription);
    displayWeatherIcon(iconUrl, weatherDescription);
    parseTimestamp(timestamp);
    displayHumidity(humidity);
    displayWind(wind);
}

function apiRequest(city){
    let units = "imperial";
    let apiKey = "424369doa037d0347bft3cfcc8cef956";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(getData);
}

function handleSearchSubmit(event){
    event.preventDefault();

    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");

    let city = (cityElement.innerHTML = searchInput.value);

    apiRequest(city);
}

function displayForecast(){
    let days =[
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    
    let forecastHtml = "";
        
    days.forEach(function(day) {
        forecastHtml += `
        <div class="weather-forecast-section">
        <div class="weather-forecast-day">${day}</div>
        <div class="forecast-icon">☀️</div>
        <div class="row">
        <div class="forecast-temperatures col-2">
        <span class="forecast-temperature-max">80º</span>
        <span class="forecast-temperature-min">60º</span>
        </div>
        </div>
        </div>
        `
    });
    
    let forecast = document.querySelector("#weather-forecast");
    forecast.innerHTML = forecastHtml;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);

apiRequest("Baltimore");
displayForecast();

