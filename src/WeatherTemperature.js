import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="current-temperature">
          {" "}
          {Math.round(props.celsius)}
        </span>{" "}
        <span className="unit">
          {" "}
          ºC |{" "}
          <a href="/" onClick={displayFahrenheit}>
            ºF
          </a>
        </span>{" "}
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="current-temperature"> {Math.round(fahrenheit)}</span>{" "}
        <span className="unit">
          {" "}
          <a href="/" onClick={displayCelsius}>
            ºC
          </a>{" "}
          | ºF
        </span>{" "}
      </span>
    );
  }
}
