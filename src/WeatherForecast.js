import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Tue</div>
          <div className="Forecast-icon">
            <WeatherIcon code="01d" />
          </div>
          <div className="Forecast-temp">
            <span className="Forecast-temp-max">19º </span>
            <span className="Forecast-temp-min">10º </span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "cd070e95ac9ddf93deb2685de9391443";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
