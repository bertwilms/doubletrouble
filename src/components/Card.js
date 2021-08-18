import React from "react";
import "./Card.css";
//import food from "../assets/food.jpg"; // Tell webpack this JS file uses this image
//import heartOutline from "../assets/heart-outline.png"; // Tell webpack this JS file uses this image
//import heartFill from "../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.id}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.datum}</h5>
          <div className="card-date">{props.tijd}</div>
        </div>
      </div>      
      <div className="card-text">{props.description}</div>      
    </div>
  );
}