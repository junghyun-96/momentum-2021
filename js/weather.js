const API_KEY = "c72aef60ae85ead1000518957f9eb990";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather");
      const city = document.querySelector("#city");
      const temp = document.querySelector("#temp");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}`;
      temp.innerText = `${data.main.temp}°C`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
