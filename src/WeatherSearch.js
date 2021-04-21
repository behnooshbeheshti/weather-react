import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import "./WeatherSearch.css";

export default function WeatherSearch() {
  let [city, setCity] = useState("");
  let [data, setData] = useState(false);
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  function displayWeather(response) {
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = Math.round(response.data.wind.speed);
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    setData(true);
    setTemperature(temperature);
    setDescription(description);
    setHumidity(humidity);
    setWind(wind);
    setIcon(icon);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "65ce7574d4f259033178f9fae0906779";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (data) {
    return (
      <div className="WeatherSearch">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        <br />
        <ul>
          <li>
            Temperature: <strong>{temperature}°C</strong>
          </li>
          <li>
            Description: <strong>{description}</strong>
          </li>
          <li>
            Humidity: <strong>{humidity}%</strong>
          </li>
          <li>
            Wind: <strong>{wind} km/h</strong>
          </li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        <br />
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
