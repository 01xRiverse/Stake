import React from "react";
import "./Coin_comp.css";
import {IoMdArrowDropdown,IoMdArrowDropup} from 'react-icons/io'


export default function Coin_comp(props) {
  return (
    <div className="coin-card">
      <div className="coin-icon-graph">
        <img src={props.coin.coin_icon}  height="32" width="32"></img>
        <img src={props.coin.graph} class={props.coin.is_up? "graph-filter-green":"graph-filter-red"} ></img>
     </div>
     <div className="coin-title">{props.coin.name}</div>
     <div className={props.coin.is_up? "coin-cap-green":"coin-cap-red"}>
       
       <div className="coin-price">
         {props.coin.price}
         </div>
       <div className="coin-status">
         {props.coin.is_up? <IoMdArrowDropup></IoMdArrowDropup>:<IoMdArrowDropdown className="IoMdArrowDropdown"></IoMdArrowDropdown> }
         <div className="coin-stat">{props.coin.status}</div>
         </div>
        
     </div>
    </div>
  );
}

