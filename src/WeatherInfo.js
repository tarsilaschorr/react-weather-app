import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import MainWeatherIcon from "./MainWeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row">
        <div className="col-6 main-section">
          <h1> {props.data.city} </h1>
          <ul className="info">
            <li className="date">
              <FormattedDate date={props.data.date} />{" "}
            </li>
            <li className="main-description text-capitalize">
              {" "}
              {props.data.description}
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="row temp-description">
            <div className="clearfix">
              <MainWeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <div className="row">
              <div className="info-description">
                <ul>
                  <span className=" text-capitalize">
                    Feels like {Math.round(props.data.feel)}ºC
                  </span>{" "}
                  | {""}
                  <span>Humidity {props.data.humidity}% </span>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
