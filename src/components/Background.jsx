/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import PropTypes from "prop-types";
import "../styles/Background.css";

const Background = ({ selectedDescription }) => {
  const url = `../images/${selectedDescription}.mp4`;

  return (
    <div id="video-holder">
      <video width="640" height="560" className="video">
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
};

Background.propTypes = {
  selectedDescription: PropTypes.string.isRequired,
};

export default Background;
