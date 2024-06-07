function displayWeatherTemperature(){
}

function displayWeatherCondition(){

}

function displayWeatherIcon(){

}

function displayWeatherDay(){

}

function displayDate()[

]

function displayTime(){
    
}

function getData(response){

}

function apiTemperatureRequest(city){
    let units = "imperial";
    let apiKey = "424369doa037d0347bft3cfcc8cef956";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=${units}`;

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