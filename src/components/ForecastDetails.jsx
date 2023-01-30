import React from "react";
import PropTypes from "prop-types";
import WindDirectionIcon from "./WindDirectionIcon";
import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, wind, humidity } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__temperature" data-testid="ancestor">
        <div className="Max" data-testid="descendant">
          {temperature.max}&deg;C
        </div>
        <div className="Min"> {temperature.min}&deg;C</div>
      </div>
      <div className="forecast-details__wind">
        Wind: {wind.speed}mph
        <WindDirectionIcon direction={wind.direction} />
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
