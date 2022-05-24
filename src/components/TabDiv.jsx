import React from "react";
import "../style/TabDiv.css";

export default function TabDiv() {
  return (
    <div className="paintbucket-div" id="tab-div">
      <div className="paintbucket-data" id="tab-data">
        <div className="paintbucket-info" id="tab-info">
          <p className="subheading-1">OVERLINE</p>
          <h3 className="paint-heading" id="tab-heading">
            Cursus vitae sollicitudin donec nascetur. Join now
          </h3>
          <p className="paint-paragraph" id="tab-paragraph">
            Donec volutpat bibendum justo, odio aenean congue est porttitor ut.
            Mauris vestibulum eros libero amet tincidunt.
          </p>
          <div className="paint-buttons">
            <button className="primary-button">Get Started</button>
            <button className="secondary-button" style={{backgroundColor:"#F2F3F6"}}>Learn more</button>
          </div>
        </div>
        <div className="paintbucket" id="tabloid"></div>
      </div>
    </div>
  );
}
