import React from 'react'
import "./TrendCard.css"

import { TrendData } from "../../Data/TrendData.js"
console.log("🚀 ~ file: TrendCard.jsx:5 ~ TrendData", TrendData)
export default function TrendCard() {
  return (
    <div className="TrendCard">
      <h3>Trends!</h3>
      {TrendData.map((trend)=>{
        return(
          <div className="trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        )
      })}
    </div>
  )
}
