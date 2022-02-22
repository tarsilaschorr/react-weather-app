import React from "react";

export default function MainWeatherIcon(props) {
  let icon = `http://openweathermap.org/img/wn/${props.code}@2x.png`;
  return <img src={icon} alt={props.alt} className="main-icon" />;
}
