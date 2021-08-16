import React from "react";
import "./Coin_comp.css";



export default function Coin_comp(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <h5 className="card-title">{props.coin.name}</h5>
          <div className="card-date">{props.coin.short_name}</div>
        </div>
      </div>
      <img className="card-image" src={props.coin.graph} alt="Logo" />
      <div className="card-text">{props.coin.description}</div>
      
    </div>
  );
}

