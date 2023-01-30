import React from "react";
import PropTypes from "prop-types";

const LocationDetails = (props) => {
  const { city, country } = props;
  return <h1>{`${city} ${country}`}</h1>;
};

LocationDetails.propTypes = {
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default LocationDetails;
