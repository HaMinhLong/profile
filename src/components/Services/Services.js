import React from "react";

import design from "../../images/design.png";
import development from "../../images/development.png";
import planning from "../../images/planning.png";

import Fade from "react-reveal/Fade";

const Services = () => {
  return (
    <section className="services sec" id="services">
      <Fade left cascade>
        <div className="content">
          <h3>
            Who <span>I</span> Do
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </Fade>
      <div className="bg"></div>
      <Fade bottom cascade>
        <div className="box-container">
          <div className="box">
            <div className="icon-box">
              <img src={design} alt="" />
            </div>
            <div className="box-content">
              <h2>Design</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon-box">
              <img src={development} alt="" />
            </div>
            <div className="box-content">
              <h2>Development</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon-box">
              <img src={planning} alt="" />
            </div>
            <div className="box-content">
              <h2>Planning</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Services;
