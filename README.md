Weather Forecast App

About the Project

The Weather Forecast App is a sleek and interactive web application designed to fetch and display real-time weather information for any city in the world. Built using the Open-Meteo API, this app provides users with current weather conditions, a 7-day forecast, and detailed metrics like temperature, humidity, wind speed, and precipitation. Its visually appealing and user-friendly interface ensures a seamless experience for users.

Features
	•	Search weather data by city name.
	•	Displays current temperature, weather condition, “feels like” temperature, humidity, wind speed, and precipitation.
	•	Provides a 7-day forecast with daily highs, lows, and precipitation levels.
	•	Responsive design compatible with desktop and mobile devices.

⸻

How to Navigate and Run the Code

Prerequisites

To run the Weather App, ensure you have the following:
	1.	A code editor (e.g., Visual Studio Code).
	2.	A modern web browser (e.g., Chrome, Firefox, Edge).
	3.	Internet access for fetching real-time weather data from the Open-Meteo API.

File Structure

The project consists of three main files:
	1.	index.html – The HTML structure for the app.
	2.	style.css – The CSS file for styling the app.
	3.	script.js – The JavaScript file handling API requests and interactivity.

⸻

Steps to Run the App
	1.	Clone or Download the Repository
	•	Clone this repository using Git: git clone (https://github.com/Najibullahsafi/wApp/)
  •	Alternatively, download the ZIP file and extract it.
2.	Open the Project
	•	Navigate to the project folder and open it in your code editor.
	3.	Launch the App
	•	Open the index.html file in a web browser. This will load the app interface.
	4.	Using the App
	•	Enter the name of a city in the search bar and click the “Get Weather” button.
	•	The app will display the current weather and 7-day forecast for the selected city.

⸻

Notes
	•	The app fetches weather data using the Open-Meteo API, which requires latitude and longitude for requests. The app automatically fetches this information using a geocoding service.
	•	The API integration ensures reliable and accurate weather updates.

⸻

Troubleshooting
	1.	If the app does not load data:
	•	Check your internet connection.
	•	Ensure the Open-Meteo API is accessible.
	2.	If you encounter an error in the console:
	•	Verify the API request URL in the script.js file.
	•	Check if the API keys (if applicable) are valid and correctly configured.

⸻

Future Enhancements
	•	Add hourly weather updates.
	•	Include weather alerts for severe conditions.
	•	Allow users to save favorite cities for quick access.
