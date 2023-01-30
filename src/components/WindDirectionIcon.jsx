import React from "react";
import PropTypes from "prop-types";
import "../styles/WindDirectionIcon.css";
import ne from "../images/ne.png";
import n from "../images/n.png";
import nw from "../images/nw.png";
import w from "../images/w.png";
import sw from "../images/sw.png";
import s from "../images/s.png";
import se from "../images/se.png";
import e from "../images/e.png";

const WindDirectionIcon = ({ direction }) => {
  let icon = null;

  if (direction === "ne") icon = ne;
  else if (direction === "n") icon = n;
  else if (direction === "wnw" || direction === "nw" || direction === "nwn")
    icon = nw;
  else if (direction === "w") icon = w;
  else if (direction === "ssw" || direction === "sw" || direction === "wsw")
    icon = sw;
  else if (direction === "s") icon = s;
  else if (direction === "se") icon = se;
  else if (direction === "e") icon = e;

  return (
    <>
      <img src={icon} className="wind-icon" alt="wind-direction" />
    </>
  );
};

WindDirectionIcon.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default WindDirectionIcon;
