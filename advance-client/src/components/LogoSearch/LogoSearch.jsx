import React from 'react'
import Logo from "../../img/logo.png"
import searchIcon from "../../img/search-icon.png"
import "./LogoSearch.css"

export default function LogoSearch() {
  return (
    <div className="LogoSearch">
      <img className='LogoSearch-logo' src={Logo} alt="AdvanceLogo" />
      <div className="Search">
        <input className="LogoSearch-input" type="text" placeholder='#Get Inspired' />
        <div className="s-icon">
          <img src={searchIcon} alt="" className="search-icon" />
        </div>
      </div>
    </div>
  )
}
