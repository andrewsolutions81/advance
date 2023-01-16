import React from "react";
import Logo from "../../img/logo.png";
import searchIcon from "../../img/search-icon.png";
import { Link } from "react-router-dom";
import "./LogoSearch.css";
import Sharebtn from "../Sharebtn/Sharebtn";

export default function LogoSearch() {
  return (
    <div className="LogoSearch">
      <div className="logoSearchContainer">
        <Link to="../../home">
          <img className="LogoSearch-logo" src={Logo} alt="AdvanceLogo" />
        </Link>
        <div className="Search">
          <input
            className="LogoSearch-input"
            type="text"
            placeholder="#Get Inspired"
          />
          <img className="search-icon" src={searchIcon} alt="search icon" />
        </div>
      </div>
      <div className="shareBtnInLogosearch">
        <Sharebtn />
      </div>
    </div>
  );
}
