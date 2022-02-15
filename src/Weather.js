import React from "react";
import "./Weather.css";

export default function Weather() {
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

      <h1> London </h1>
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
              <span className="current-temperature"> 9</span>{" "}
              <span className="unit"> ºC</span>{" "}
            </span>
          </div>
        </div>
        <div className="col-6 description">
          <ul>
            <li>Rain %</li>
            <li>Humidity %</li>
            <li> Wind km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
