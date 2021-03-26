import React from "react";

import design from "../../images/design.png";
import development from "../../images/development.png";
import planning from "../../images/planning.png";

const Services = () => {
  return (
    <section class="services" id="services">
      <div className="content">
        <h3>
          Who <span>I</span> Do
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="box-container">
        <div class="box">
          <div class="icon-box">
            <img src={design} alt="" />
          </div>
          <div class="box-content">
            <h2>Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div class="box">
          <div class="icon-box">
            <img src={development} alt="" />
          </div>
          <div class="box-content">
            <h2>Development</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div class="box">
          <div class="icon-box">
            <img src={planning} alt="" />
          </div>
          <div class="box-content">
            <h2>Planning</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
