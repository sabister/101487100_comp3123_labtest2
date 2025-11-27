import React, { useState } from "react";
import SearchCity from "./components/searchCity";
import WeatherInfo from "./components/weatherInfo";
import "./App.css";

const API_KEY = "022d08e0ba365ad08052e7b83a3b9be4";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;

    try {
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      if (!response.ok) {
        setError("City not found/spelt wrong");
        setWeather(null);
        return;
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      console.error(err);
      setError("error getting weather.");
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchCity city={city} setCity={setCity} onSearch={getWeather} />

      {error && <p className="error">{error}</p>}

      <WeatherInfo weather={weather} />
    </div>
  );
}

export default App;
