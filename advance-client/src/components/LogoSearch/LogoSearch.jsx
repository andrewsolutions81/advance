import React from "react";
import Logo from "../../img/logo.png";
import searchIcon from "../../img/search-icon.png";
import {Link} from "react-router-dom";
import "./LogoSearch.css";

export default function LogoSearch() {
  return (
    <div className="LogoSearch">
      <Link to="../../home">
        <img className="LogoSearch-logo" src={Logo} alt="AdvanceLogo" />
      </Link>
      <div className="Search">
        <input
          className="LogoSearch-input"
          type="text"
          placeholder="#Get Inspired"
        />
        <div className="s-icon">
          <img src={searchIcon} alt="" className="search-icon" />
        </div>
      </div>
    </div>
  );
}
