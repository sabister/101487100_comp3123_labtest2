import React from "react";

const WeatherInfo = ({ weather }) => {
  if (!weather) return null;

  const {name,sys,main, weather: weatherInfo,wind,} = weather;

  const c = (k) => Math.round(k - 273.15);

  const temperature = c(main.temp);
  const feelsLike = c(main.feels_like);
  const tempMin = c(main.temp_min);
  const tempMax = c(main.temp_max);

  const icon = `http://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`;
  const description = weatherInfo[0].description;

  return (
    <div className="weatherinfo">
      <h2>
        {name}, {sys.country}
      </h2>

      <img src={icon} alt="icon" />

      <h1>{temperature}°C</h1>
      <p className="description">{description}</p>

      <div className="info">
        <p>Feels Like: {feelsLike}°C</p>
        <p>High: {tempMax}°C</p>
        <p>Low: {tempMin}°C</p>
        <p>Humidity:{main.humidity}%</p>
        <p>Pressure:{main.pressure} hPa</p>
        <p>Wind:{wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherInfo;

