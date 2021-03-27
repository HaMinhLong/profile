import React from "react";

import Fade from "react-reveal/Fade";

const Work = () => {
  return (
    <section className="work sec" id="work">
      <Fade left cascade>
        <div className="content">
          <h3>
            Recent <span>W</span>ork
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="project">
          <div className="box">
            <div className="front">
              <p>1</p>
            </div>
            <div className="back">
              <p>Social Network Application</p>
            </div>
          </div>
          <div className="box">
            <div className="front">
              <p>2</p>
            </div>
            <div className="back">
              <p>Movie Information</p>
            </div>
          </div>
          <div className="box">
            <div className="front">
              <p>3</p>
            </div>
            <div className="back">
              <p>Friendly Food</p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Work;
