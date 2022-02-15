import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Type a city..."
                autoFocus
                className="form-control "
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>

        <h1> {weatherData.city} </h1>
        <ul>
          <li className="date"> Tuesday, 3pm </li>
          <li className="main-description"> Cloudy</li>
        </ul>
        <div className="row temp-description">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="icon"
              />
              <span>
                <span className="current-temperature">
                  {" "}
                  {Math.round(weatherData.temperature)}
                </span>{" "}
                <span className="unit"> ºC</span>{" "}
              </span>
            </div>
          </div>
          <div className="col-6 description">
            <ul>
              <li>Rain %</li>
              <li>Humidity: {weatherData.humidity}% </li>
              <li> Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "cd070e95ac9ddf93deb2685de9391443";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
