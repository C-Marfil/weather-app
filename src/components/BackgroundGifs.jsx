import React from "react";
import PropTypes from "prop-types";
import "../styles/BackgroundGifs.css";

const BackgroundGifs = ({ selectedDescription }) => {
  return <div className="background-gif" id={selectedDescription} />;
};

BackgroundGifs.propTypes = {
  selectedDescription: PropTypes.string.isRequired,
};

export default BackgroundGifs;
