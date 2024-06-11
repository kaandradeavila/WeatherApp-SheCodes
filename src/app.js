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
    console.log(icon);
    let weatherIconElement = document.querySelector("#weather-icon");
    weatherIconElement.src = icon;
    weatherIconElement.alt = `${description} icon`;
}

function displayWeatherDay(){

}

function displayDate(){

}

function displayTime(){
    
}

function ParseTimestamp(timestamp){
    let date = new Date(timestamp * 1000);
    console.log(date);
}

function getData(response){
    let currentTemperature = response.data.temperature.current;
    let weatherDescription = response.data.condition.description;
    let iconUrl = response.data.condition.icon_url;
    let timestamp = response.data.time;

    console.log(response);
    displayWeatherTemperature(currentTemperature);
    displayWeatherCondition(weatherDescription);
    displayWeatherIcon(iconUrl, weatherDescription);
    ParseTimestamp(timestamp);
}

function apiRequest(city){
    let units = "imperial";
    let apiKey = "424369doa037d0347bft3cfcc8cef956";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(getData);
}

function handleSearchSubmit(event){
    event.preventDefault();

    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");

    let city = (cityElement.innerHTML = searchInput.value);

    console.log(city);

    apiRequest(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);

apiRequest("Windsor Mill");