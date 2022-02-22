import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span>
      <span className="current-temperature"> {Math.round(props.celsius)}</span>{" "}
      <span className="unit"> ºC </span>{" "}
    </span>
  );
}
