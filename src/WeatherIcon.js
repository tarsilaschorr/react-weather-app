import React from "react";

export default function WeatherIcon(props) {
  let icon = `http://openweathermap.org/img/wn/${props.code}@2x.png`;
  return <img src={icon} alt={props.alt} />;
}
