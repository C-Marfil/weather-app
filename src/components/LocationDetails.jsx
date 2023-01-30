import React from "react";
import PropTypes from "prop-types";
import "../styles/LocationDetails.css";

const LocationDetails = (props) => {
  const { city, country, errorMessage } = props;

  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1 className="location-details">{`${city}, ${country}`}</h1>
  );
};

LocationDetails.defaultProps = {
  errorMessage: "",
};

LocationDetails.propTypes = {
  errorMessage: PropTypes.string,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default LocationDetails;
