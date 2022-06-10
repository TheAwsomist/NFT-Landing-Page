import React from "react";
import "../style/Card.css";
import { AiOutlineClockCircle } from "react-icons/ai";

export function Card({ cardimage, cardtitle, price, time }) {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${cardimage})` }}
      ></div>
      <div className="info-section">
        <div className="card-info">
          <p className="card-title">{cardtitle}</p>
          <div className="price-tag">{price} ETH</div>
        </div>
        <div
          className="timer"
          style={{ display: "flex", alignItems: "center" }}
        >
          <AiOutlineClockCircle style={{height:"fit-content",marginBottom: "3px"}}/> <p style={{margin:"0", height:"fit-content",width:"55%",textAlign:"center"}}>{time} min left</p>
        </div>
      </div>
    </div>
  );
}
export function CardSmall({ cardimage, cardtitle, price, time }) {
  return (
    <div className="cardsmall">
      <div
        className="card-image-small"
        style={{ backgroundImage: `url(${cardimage})` }}
      ></div>
      <div className="info-section">
        <div className="card-info">
          <p className="card-title">{cardtitle}</p>
        </div>
        <div
          className="card-bottom-info"
        >
          <div
          className="timer"
          style={{ display: "flex", alignItems: "center" }}
        >
          <AiOutlineClockCircle style={{height:"fit-content"}}/> <p style={{margin:"0", height:"fit-content",width:"100%",textAlign:"center"}}>{time} min </p>
        </div>
          <div className="price-tag">{price} ETH</div>
        </div>
      </div>
    </div>
  );
}

export function ExtraSmallCard({image, price}) {
  return (
    <div className="extrasmall-card">
      <div className="extrasmall-image" style={{backgroundImage:`url(${image})`}}></div>
      <p className="extrasmall-price">{price} ETH</p>
    </div>
  )
}

