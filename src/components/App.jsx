import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";

function App({ location, forecasts }) {
  const { city, country } = location || {};
  const { date, temperature, description, icon } = forecasts;
  return (
    <div>
      <LocationDetails city={city} country={country} />
      <ul>
        <ForecastSummary
          date={date}
          temp={temperature}
          desc={description}
          icon={icon}
        />
      </ul>
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
};

export default App;
