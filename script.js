const geocodeUrl = "https://geocoding-api.open-meteo.com/v1/search";
const weatherUrl = "https://api.open-meteo.com/v1/forecast";

document.getElementById("getWeather").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  // Fetch city coordinates
  const coordinates = await fetchCoordinates(city);
  if (coordinates) {
    // Fetch weather data
    const weatherData = await fetchWeatherData(coordinates.latitude, coordinates.longitude);
    if (weatherData) {
      displayCurrentWeather(city, weatherData);
      displayForecast(weatherData);
    }
  }
});

async function fetchCoordinates(city) {
  try {
    const response = await fetch(`${geocodeUrl}?name=${city}`);
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const { latitude, longitude } = data.results[0];
      return { latitude, longitude };
    } else {
      alert("City not found.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
  }
}

async function fetchWeatherData(latitude, longitude) {
  try {
    const response = await fetch(
      `${weatherUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function displayCurrentWeather(city, data) {
  const current = data.current_weather;
  document.getElementById("cityName").innerText = city;
  document.getElementById("date").innerText = new Date().toDateString();
  document.getElementById("temperature").innerText = `${Math.round(current.temperature)}°C`;
  document.getElementById("condition").innerText = "Clear Sky"; // Add appropriate condition mapping if needed
  document.getElementById("feelsLike").innerText = `${Math.round(current.temperature)}°C`;
  document.getElementById("humidity").innerText = "--%"; // Open-Meteo does not provide humidity in its current_weather
  document.getElementById("windSpeed").innerText = `${current.windspeed} km/h`;
}

function displayForecast(data) {
  const forecastContainer = document.getElementById("forecastContainer");
  forecastContainer.innerHTML = ""; // Clear previous forecasts
  const daily = data.daily;
  for (let i = 0; i < daily.time.length; i++) {
    const forecastDiv = document.createElement("div");
    forecastDiv.innerHTML = `
      <h4>${new Date(daily.time[i]).toLocaleDateString("en-US", { weekday: "short" })}</h4>
      <p>Max: ${daily.temperature_2m_max[i]}°C</p>
      <p>Min: ${daily.temperature_2m_min[i]}°C</p>
      <p>Precip: ${daily.precipitation_sum[i]} mm</p>
    `;
    forecastContainer.appendChild(forecastDiv);
  }
}