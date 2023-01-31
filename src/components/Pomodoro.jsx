/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import PropTypes from "prop-types";
import "../styles/Pomodoro.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactPlayer from "react-player";

const rain = "https://youtu.be/nF1fSKEiyA0";
const clear = "https://youtu.be/YdtBEFK_HgI";
const welcome = "https://youtu.be/YdtBEFK_HgI";
const snow = "https://youtu.be/UglAgexl_o8";
const clouds = "https://youtu.be/grBFMP3HDZA";
let url = "";

const Background = ({ selectedDescription }) => {
  if (selectedDescription === "Rain") url = rain;
  else if (selectedDescription === "Clear") url = clear;
  else if (selectedDescription === "Clouds") url = clouds;
  else if (selectedDescription === "Snow") url = snow;
  else url = welcome;

  return (
    <div className="pomodoro">
      <ReactPlayer
        id="video"
        width="100%"
        height="100%"
        playing
        muted
        controls
        url={url}
      />
    </div>
  );
};

Background.propTypes = {
  selectedDescription: PropTypes.string.isRequired,
};

export default Background;
