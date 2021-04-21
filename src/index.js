import React from "react";
import ReactDOM from "react-dom";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="weatherApp">
      <div className="App">
        <h1>Weather App</h1>
        <br />
        <WeatherSearch />
      </div>
      <a
        href="https://github.com/behnooshbeheshti/weather-react"
        target="_blanck"
      >
        Open-source code
      </a>
      , by{" "}
      <a href="https://www.linkedin.com/in/behnoosh-beheshti/" target="_blanck">
        Behnoosh Beheshti
      </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
