import React from "react";
import PropTypes from "prop-types";

function ForecastSummary(props) {
  const { date, description, icon, temperature } = props;
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__temperature">{temperature.max}</div>
      <div className="forecast-summary__description">{description}</div>
      <div className="forecast-summary__icon">{icon}</div>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
