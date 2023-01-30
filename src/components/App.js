import React, { useEffect, useState } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";
import SearchForm from "./SearchForm";
import Pomodoro from "./Pomodoro";
import SwipePomodoro from "./SwipePomodoro";
import BackgroundGifs from "./BackgroundGifs";
import "../styles/App.css";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedDescription, setDescription] = useState("welcome");
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  const handleForecastSelect = (date, description) => {
    setSelectedDate(date);
    setDescription(description);
  };

  const handleCitySearch = () => {
    getForecast(
      setSelectedDate,
      setForecasts,
      setLocation,
      searchText,
      setErrorMessage
    );
  };

  return (
    <div className="weather-app">
      <BackgroundGifs
        className="background"
        selectedDescription={selectedDescription}
      />
      <SwipePomodoro />
      <Pomodoro
        className="pomodoro"
        selectedDescription={selectedDescription}
      />
      <div className="nav">
        <LocationDetails
          city={location.city}
          country={location.country}
          errorMessage={errorMessage}
        />
        <SearchForm
          searchText={searchText}
          setSearchText={setSearchText}
          onSubmit={handleCitySearch}
        />
        {!errorMessage && (
          <>
            <ForecastSummaries
              forecasts={forecasts}
              onForecastSelect={handleForecastSelect}
            />
            {selectedForecast && (
              <ForecastDetails forecast={selectedForecast} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
