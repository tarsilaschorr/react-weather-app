import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <div className="Forecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="Forecast-temp">
        <span className="Forecast-temp-max">
          {Math.round(props.data.temp.max)}º{" "}
        </span>
        <span className="Forecast-temp-min">
          {Math.round(props.data.temp.min)}º{" "}
        </span>
      </div>
    </div>
  );
}
