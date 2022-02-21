import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  console.log(props.data.icon);
  return (
    <div>
      <h1> {props.data.city} </h1>
      <ul>
        <li className="date">
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li className="main-description text-capitalize">
          {" "}
          {props.data.description}
        </li>
      </ul>
      <div className="row temp-description">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6 description">
          <ul>
            <li>Humidity: {props.data.humidity}% </li>
            <li> Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
