import React from "react";

export default function Spyglass() {
  return (
    <div className="paintbucket-div">
      <div className="paintbucket-data" style={{ width: "80%", height: "80%" }}>
        <div className="spyglass"></div>
        <div className="paintbucket-info">
          <p className="subheading-1">OVERLINE</p>
          <h3 className="paint-heading">
            Sapien ipsum scelerisque convallis fusce
          </h3>
          <p className="paint-paragraph">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          <div className="spyglass-icons">
            <div className="spy-data">
              <div className="spy-icon-1"></div>
              <p className="spy-text-1">Sollicitudin sapien</p>
              <p className="spy-text-2">Cursus fermentum</p>
            </div>
            <div className="spy-data">
              <div className="spy-icon-2"></div>
              <p className="spy-text-1">Sollicitudin sapien</p>
              <p className="spy-text-2">Cursus fermentum</p>
            </div>
          </div>
          <div className="paint-buttons">
            <button className="primary-button">Get Started</button>
            <button className="secondary-button">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
