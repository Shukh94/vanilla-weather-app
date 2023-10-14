function showTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}

let apiKey = "f7af430b9dd12626ceea8cea065114b4";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=New York &appid=${apiKey}&units=metric`;

axios.get(apiURL).then(showTemp);