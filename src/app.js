function capitalizeWords(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(capitalizeWords("hello friend")); // Output: "Hello Friend"


function displayWeatherTemperature(currentTemperature){
    let currentTemperatureElement = document.querySelector("#weather-temp");
    currentTemperatureElement.innerHTML = Math.round(currentTemperature);
}

function displayWeatherCondition(description){
    let weatherDescriptionElement = document.querySelector("#weather-description");
    weatherDescriptionElement.innerHTML = capitalizeWords(description);
}

function displayWeatherIcon(){

}

function displayWeatherDay(){

}

function displayDate(){

}

function displayTime(){

}

function getData(response){
    console.log(response);
    displayWeatherTemperature(response.data.temperature.current);
    displayWeatherCondition(response.data.condition.description);
}

function apiTemperatureRequest(city){
    let units = "imperial";
    let apiKey = "424369doa037d0347bft3cfcc8cef956";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=imperial`;

    axios.get(apiUrl).then(getData);
}

function handleSearchSubmit(event){
    event.preventDefault();

    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");

    let city = (cityElement.innerHTML = searchInput.value);

    console.log(city);

    apiTemperatureRequest(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);