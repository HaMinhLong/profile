import React from "react";

const Stats = () => {
  return (
    <section className="stats sec" id="stats">
      <div className="content">
        <h3>
          Who <span>A</span>chievements
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>
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
    </section>
  );
};

export default Stats;
