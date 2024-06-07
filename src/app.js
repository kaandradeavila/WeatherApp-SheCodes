function displayTemperature(response){
    
}

function apiTemperatureRequest(){
    let apiKey = "424369doa037d0347bft3cfcc8cef956";
    let city = "";
    let apiUrl = "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";

    axios.get(apiUrl).then(displayTemperature);
}

function handleSearchSubmit(event){
    event.preventDefault();

    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = searchInput.value;

    apiTemperatureRequest();
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);