import React from 'react'
import "./TrendCard.css"

import { TrendData } from "../../Data/TrendData.js"

export default function TrendCard() {
  return (
    <div className="TrendCard">
      <h3>Trends!</h3>
      {TrendData.map((trend)=>{
        return(
          <div className="trend" key={trend.name}>
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        )
      })}
    </div>
  )
}
