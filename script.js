const apiKey = "879b96037994f0eaf56c2f9650bac820";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const weatherImg = document.querySelector(".weather-img");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error-msg").style.display = "flex";
  } else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".city-container").style.display = "flex";
    document.querySelector(".middle-container").style.display = "flex";
    document.querySelector(".bottom-container").style.display = "flex";
    document.querySelector(".error-msg").style.display = "none";
  }
}

addEventListener("click", () => {
  checkWeather(searchInput.value);
});
