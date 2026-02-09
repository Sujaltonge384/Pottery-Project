
//Nilambur

document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "39450165cbcdc17742defa5e7ba8cf3a";
  const city = "Nilambur";

  console.log("Weather JS loaded");

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(res => {
      console.log("Response status:", res.status);
      return res.json();
    })
    .then(data => {
      console.log("Weather data:", data);

      if (!data.main) {
        throw new Error("No weather data");
      }

      document.getElementById("weatherTemp").innerText =
        Math.round(data.main.temp);

      document.getElementById("weatherDesc").innerText =
        data.weather[0].description;
    })
    .catch(err => {
      console.error("Weather error:", err);
      document.getElementById("weatherDesc").innerText =
        "Weather unavailable";
    });
});
