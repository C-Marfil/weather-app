/* eslint-disable no-console */
import axios from "axios";

const getForecast = (
  setSelectedDate,
  setForecasts,
  setLocation,
  searchText,
  setErrorMessage
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  axios
    .get(endpoint)
    .then((response) => {
      setErrorMessage("");
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("No city under that name. Try again.");
        console.error("Location is not valid, error");
      }
      if (status === 500) {
        setErrorMessage("Oops, server error, try again later.");
        console.error("Server error", error);
      }
    });
};

export default getForecast;
