const apiKey = "5e111be43915d71c428d2056b8bf7fd8";
const apiUrl =
	"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(cityN) {
	const response = await fetch(apiUrl + cityN + `&appid=${apiKey}`);

	if (response.status == 404) {
		error.style.display = "block";
		weather.style.display = "none";
	} else {
		var data = await response.json();
		console.log(data);

		city.innerHTML = data.name;
		temp.innerHTML = Math.round(data.main.temp) + "°C";
		humidity.innerHTML = data.main.humidity + "%";
		wind.innerHTML = data.wind.speed + "km/h";

		if (data.weather[0].main == "Clouds") {
			weatherIcon.src = "images/clouds.png";
		} else if (data.weather[0].main == "Clear") {
			weatherIcon.src = "images/clear.png";
		} else if (data.weather[0].main == "Rain") {
			weatherIcon.src = "images/rain.png";
		} else if (data.weather[0].main == "Drizzle") {
			weatherIcon.src = "images/drizzle.png";
		} else if (data.weather[0].main == "Mist") {
			weatherIcon.src = "images/mist.png";
		}

		weather.style.display = "block";
		error.style.display = "none";
	}
}

searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value);
});
