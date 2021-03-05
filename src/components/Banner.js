import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Creating unique brands is</span>
            </div>
            <div className="line">
              <span>what we do.</span>
            </div>
          </h2>
          <div className="btn-row">
            <NavLink to="/about-us" exact>
              More about us <RightArrow />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
