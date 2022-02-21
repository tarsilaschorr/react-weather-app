import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
}
