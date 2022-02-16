import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
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
            <img src={props.data.iconUrl} alt={props.data.description} />
            <span>
              <span className="current-temperature">
                {" "}
                {Math.round(props.data.temperature)}
              </span>{" "}
              <span className="unit"> ºC</span>{" "}
            </span>
          </div>
        </div>
        <div className="col-6 description">
          <ul>
            <li>Rain %</li>
            <li>Humidity: {props.data.humidity}% </li>
            <li> Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}