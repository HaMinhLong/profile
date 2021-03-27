import React from "react";

import Fade from "react-reveal/Fade";

const Stats = () => {
  return (
    <section className="stats sec" id="stats">
      <Fade right cascade>
        <div className="content">
          <h3>
            Who <span>A</span>chievements
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="stats-container">
          <div className="box">
            <p>5 +</p>
            <p>Projects</p>
          </div>
          <div className="box">
            <p>1 +</p>
            <p>Happy Clients</p>
          </div>
          <div className="box">
            <p>1 +</p>
            <p>Countries</p>
          </div>
          <div className="box">
            <p>0 +</p>
            <p>Awards</p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Stats;
