import "./currentWeather.css";

import React from "react";

export const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div className="">
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <div className="temperature">
          {Math.round(data.main.temp)}
          <sup>o</sup>C
        </div>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}
              <sup>o</sup>C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {Math.round(data.wind.speed)} m/s{" "}
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">
              {Math.round(data.main.humidity)} %
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">
              {Math.round(data.main.pressure)} hpa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
