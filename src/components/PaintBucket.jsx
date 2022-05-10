import React from "react";

export default function PaintBucket() {
  return (
    <div className="paintbucket-div">
      <div className="paintbucket-data">
        <div className="paintbucket-info">
          <p className="subheading-1">OVERLINE</p>
          <h3 className="paint-heading">
            Sapien ipsum scelerisque convallis fusce
          </h3>
          <p className="paint-paragraph">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          <div className="paint-buttons">
            <button className="primary-button">Get Started</button>
            <button className="secondary-button">Learn more</button>
          </div>
        </div>
        <div className="paintbucket"></div>
      </div>
    </div>
  );
}
