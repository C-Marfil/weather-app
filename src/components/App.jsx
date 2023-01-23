/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import "../styles/App.css";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);

  const getForecast = () => {
    const endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

    axios.get(endpoint).then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    });
  };

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => setSelectedDate(date);

  useEffect(() => {
    getForecast(setSelectedDate, setLocation, setForecasts);
  }, []);

  const { city, country } = location || {};
  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries
        onForecastSelect={handleForecastSelect}
        forecasts={forecasts}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />};
    </div>
  );
};

export default App;
