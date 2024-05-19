function handleSearchSubmit(event){
    event.preventDefault();

    let searchInput = document.querySelector("#search-form-input");
    let cityName = document.querySelector("#city");

    cityName.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);