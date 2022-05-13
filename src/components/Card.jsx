import React from "react";
import "../style/Card.css";
import { AiOutlineClockCircle } from "react-icons/ai";

export function Card({ cardimage }) {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${cardimage})` }}
      ></div>
      <div className="info-section">
        <div className="card-info">
          <p className="card-title">Dui accumsan leo vestibulum ornare eu</p>
          <div className="price-tag">1.311 ETH</div>
        </div>
        <div
          className="timer"
          style={{ display: "flex", alignItems: "center" }}
        >
          <AiOutlineClockCircle style={{height:"fit-content",marginBottom: "3px"}}/> <p style={{margin:"0", height:"fit-content",width:"55%",textAlign:"center"}}>22:59 min left</p>
        </div>
      </div>
    </div>
  );
}
export function CardSmall({ cardimage }) {
  return (
    <div className="cardsmall">
      <div
        className="card-image-small"
        style={{ backgroundImage: `url(${cardimage})` }}
      ></div>
      <div className="info-section">
        <div className="card-info">
          <p className="card-title">Dui accumsan leo vestibulum ornare eu</p>
        </div>
        <div
          style={{
            display: "flex",
            borderBottom: "0.5px solid lightgrey",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
          className="timer"
          style={{ display: "flex", alignItems: "center" }}
        >
          <AiOutlineClockCircle style={{height:"fit-content"}}/> <p style={{margin:"0", height:"fit-content",width:"100%",textAlign:"center"}}>22:59 min </p>
        </div>
          <div className="price-tag">1.311 ETH</div>
        </div>
      </div>
    </div>
  );
}
