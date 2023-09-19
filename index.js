
const button = document.getElementById("search-button");
const city = document.getElementById("city-name");
const cityLocation = document.getElementById("city-location");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");


async function getData(cityName){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=cedd8a2acec147de93941022231609&q=${cityName}&aqi=no`
    );
    return await promise.json();
}

button.addEventListener("click", async() => {
    const value = city.value;
    const result = await getData(value);
    cityLocation.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText =  result.current.temp_c;
});
